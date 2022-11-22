import { NextFunction, Request, Response } from 'express';
import pool from './../db/database';
import { Repair } from '../interfaces/repair.interface';
import Data_Employee from '../models/employee.model';
import Data from '../models/repair.model';

class RepairController
{
    public create(req: Request, res: Response, next: NextFunction): any {
         
        return Data.find()
        .then(count => {
            const data = array_to_string(req.body);

            data.r_Id = (count.length + 1);

            return new Data(data).save()
            .then(result => res.status(201).send(true))
            .catch(error => res.status(500).json(false));
        });

    }

    public read(req: Request, res: Response, next: NextFunction): any {
            //     const sql: string = `SELECT r.*,`+
    //                         `e.e_JobNumber, e.e_Name,`+
    //                         `(SELECT c_Code FROM client) AS CODE,`+
    //                         `(SELECT c_Name FROM client) AS NAME `+
    //                         `FROM repair r LEFT JOIN employee e ON r.r_JobNumber = e.e_JobNumber`;
    // .populate('employee')
        // return Data_Employee.aggregate([
        //     {
        //         $lookup: {
        //             from: "repair",
        //             as: "repair",
        //             let: {
        //                 e: "e_JobNumber"
        //             },
        //             pipeline: [
        //                 {
        //                     $match: {
        //                         $expr: {
        //                             $eq: ["$e_JobNumber"]
        //                         }
        //                     }
        //                 }
        //             ]
        //         },
        //     }
        // ])


        // db.article.aggregate([
        //     { $match: {
        //         title: { $regex: /example/ }
        //     } },
        //     { $lookup: {
        //       from: "article_category",
        //       let: {
        //         article_id: "$article_id"
        //       },
        //       pipeline: [
        //         { $match: {
        //             $expr: { $and: [
        //                 { $in: [ 8, "$all_category_id" ] },
        //                 { $eq: [ "$article_id", "$$article_id" ] }
        //             ] }
        //         } }
        //       ],
        //       as: "article_category"
        //     } },
        //     { $match: {
        //       $expr: { $gt: [
        //         { $size: "$article_category"},
        //         0
        //       ] }
        //     } }
        //   ] )






        // return Data.aggregate([
        //     {
        //         "$lookup": {
        //             from: "employee",
        //             localField: "r_JobNumber",
        //             foreignField: "e_JobNumber",
        //             as: "employee",
        //         }
        //     },

        //     {
        //         $replaceRoot: { newRoot: { $mergeObjects: [ { $arrayElemAt: [ "$employee", 0 ] }, "$$ROOT" ] } }
        //      },
        //     { 
        //         "$project": {
        //             "employee": 0
        //         }
        //     }
        // ])


        // return Data.aggregate([
        //     {
        //         "$lookup": {
        //             from: "employee",
        //             localField: "r_JobNumber",
        //             foreignField: "e_JobNumber",
        //             as: "employee",
        //         }
        //     },
        //     {
        //         "$unwind":
        //         {
        //             path: '$employee',
        //             // includeArrayIndex: 'employee_id',
        //         }
        //     },
        //     { 
        //         "$project": {
        //             _id: 0,
        //             "employee._id": 0
        //         }
        //     },
        //     {
        //         "$sort" : { "_id" : 1 }
        //     }

        // r_JobNumber: string;
        // r_SerialNumber: string;
        // r_WorkOrder: string;
        // r_Model: string;
        // r_Error: string;
        // r_Process: string;
        // r_Status: string;
        // r_Client: string;
        // r_Date: string;
        // e_Name?: string;

        // return Data.aggregate([
        //     {
        //         "$lookup": {
        //             from: "employee",
        //             localField: "r_JobNumber",
        //             foreignField: "e_JobNumber",
        //             as: "employee",
        //         }
        //     },
        //     {
        //         $replaceRoot: { newRoot: { $mergeObjects: [ { $arrayElemAt: [ "$employee", 0 ] }, "$$ROOT" ] } }
        //     },
        //     { 
        //         "$project": {
        //             _id: 0,
        //             employee: 0,
        //             e_Email: 0,
        //             e_JobNumber: 0,
        //             e_PassWord: 0,
        //             e_Lv: 0,
        //             e_Date: 0,
        //     }
        //     },
        //     {
        //         "$sort" : { "_id" : 1 }
        //     }
        // ])
        return Data.aggregate([

            {
                "$lookup": {
                    from: "employee",
                    localField: "r_JobNumber",
                    foreignField: "e_JobNumber",
                    as: "employee",
                }
            },
            {
                "$lookup": {
                    from: "employee",
                    localField: "r_JobNumber",
                    foreignField: "e_JobNumber",
                    as: "employee",
                }
            },
            {
                $replaceRoot: { newRoot: { $mergeObjects: [ { $arrayElemAt: [ "$employee", 0 ] }, "$$ROOT" ] } }
            },
            { 
                "$project": {
                    _id: 1,
                    employee: 0,
                    e_Email: 0,
                    e_JobNumber: 0,
                    e_PassWord: 0,
                    e_Lv: 0,
                    e_Date: 0,
            }
            },
            {
                "$sort" : { "_id" : 1 }
            }
        ])
        .then(result => {
            console.log(result);
            
            res.status(200).json(result)
        })
        .catch(error => res.status(500).json(false));
    }

    public find(req: Request, res: Response, next: NextFunction): any {        
        return Data.findById(req.params.id)
        .then(result => res.status(200).json(result))
        .catch(error => res.status(500).json(false));
    }

    public update(req: Request, res: Response, next: NextFunction): any {  
        
        const data = array_to_string(req.body);        
        
        // return Data.findOneAndUpdate({r_Id: data.r_Id}, data)
        return Data.findByIdAndUpdate(data._id, data)
        .then(result => res.status(200).send(true))
        .catch(error => res.status(500).json(false));
    }

    public delete(req: Request, res: Response, next: NextFunction): any {        
        return Data.findByIdAndDelete(req.params.id)
        .then(result => res.status(200).send(true))
        .catch(error => res.status(500).json(false));
    }

    // public async create(req: Request, res: Response): Promise<void>
    // {                
    //     const data: Repair           = req.body;
    //     const r_Id: any              = data.r_Id || 0;
    //     const r_JobNumber: string    = data.r_JobNumber;
    //     const r_SerialNumber: string = data.r_SerialNumber; 
    //     const r_WorkOrder: string    = data.r_WorkOrder;
    //     const r_Model: string        = data.r_Model;
    //     const r_Error: any           = data.r_Error;
    //     const r_Process: any         = data.r_Process;
    //     const r_Status: string       = data.r_Status;
    //     const r_Client: string       = data.r_Client;
    //     const r_Date: string         = data.r_Date;        
        
    //     const sql: string = `REPLACE INTO repair(r_Id, r_JobNumber, r_SerialNumber, r_WorkOrder, r_Model, r_Error, r_Process, r_Status, r_Client, r_Date)`+
    //                         ` VALUES `+
    //                         `(${r_Id}, '${r_JobNumber}', '${r_SerialNumber}', '${r_WorkOrder}', '${r_Model}', '${r_Error}', '${r_Process}', '${r_Status}', '${r_Client}', '${r_Date}')`;
                            
    //     await pool.then(con => {
    //         return con.query(sql).then((result: any) => {   
    //             if(result.insertId > 0)
    //             {                    
    //                 res.status(200).send(true);
    //             }
    //             else
    //             {
    //                 res.status(200).send(false);
    //             }
    //         });
    //     })
    //     .catch(err => {            
    //         res.status(404).send(false);
    //     });
    // }

    // public async read(req: Request, res: Response): Promise<void>
    // {
    //     const sql: string = `SELECT r.*,`+
    //                         `e.e_JobNumber, e.e_Name,`+
    //                         `(SELECT c_Code FROM client) AS CODE,`+
    //                         `(SELECT c_Name FROM client) AS NAME `+
    //                         `FROM repair r LEFT JOIN employee e ON r.r_JobNumber = e.e_JobNumber`;

    //     await pool.then(con => {
    //         return con.query(sql).then((result: Array<Object>) => {
    //             if(result.length > 0)
    //             {                    

    //                 console.log(result);
                    
    //                 res.status(200).json(result);
    //             }
    //             else
    //             {
    //                 res.status(200).json([]);
    //             }
    //         });
    //     })
    //     .catch(err => {
    //         res.status(404).send([]);
    //     });
    // }
    
    // public async delete(req: Request, res: Response): Promise<void>
    // {
    //     const id: string = req.params.id;

    //     await pool.then(con => {
    //         return con.query('DELETE FROM repair WHERE r_Id = ?', [id])
    //         .then((result: any) => {
    //             if(result.affectedRows > 0)
    //             {
    //                 res.status(200).send(true);
    //             }
    //             else
    //             {
    //                 res.status(200).send(false);
    //             }        
    //         });
    //     })
    //     .catch(err => {
    //         res.status(404).send(false);
    //     });
    // }
}

const array_to_string = (data: any): Repair => {

    for(const key in data)
    {            
        if(data[key] instanceof Object)
        {
            data[key] = data[key].join();
        }
    }    

    return data;
}

export const repairController = new RepairController();