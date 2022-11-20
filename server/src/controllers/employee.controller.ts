import { NextFunction, Request, Response } from 'express';
import pool from './../db/database';
import { Employee } from '../interfaces/employee.interface';
import Data from '../models/employee.model';
import crypto from 'crypto';

class EmployeeController
{
    public create(req: Request, res: Response, next: NextFunction): any {
         
        const data = new Data(req.body);

        return data.save()
        .then(result => res.status(201).send(true))
        .catch(error => res.status(500).json(false));
    }

    public read(req: Request, res: Response, next: NextFunction): any {
        return Data.find()
        .then(result => res.status(200).json(result))
        .catch(error => res.status(500).json(false));
    }

    public find(req: Request, res: Response, next: NextFunction): any {        
        return Data.findById(req.params.id)
        .then(result => res.status(200).json(result))
        .catch(error => res.status(500).json(false));
    }

    public update(req: Request, res: Response, next: NextFunction): any {        
        return Data.findByIdAndUpdate(req.params.id, req.body)
        .then(result => res.status(200).send(true))
        .catch(error => res.status(500).json(false));
    }

    public delete(req: Request, res: Response, next: NextFunction): any {        
        return Data.findByIdAndDelete(req.params.id)
        .then(result => res.status(200).send(true))
        .catch(error => res.status(500).json(false));
    }

    
//     public async create(req: Request, res: Response): Promise<void>
//     {        
//         const data: Employee    = req.body;
//         const jNumber: string   = data.e_JobNumber;
//         const name: string      = data.e_Name;
//         const passWord: string  = md5_PassWord(data.e_PassWord);
//         const email: string     = data.e_Email;
//         const date: string      = data.e_Date;
//         const lv: number        = data.e_Lv;

//         const sql: string = `INSERT INTO employee(e_JobNumber, e_Name, e_PassWord, e_Email, e_Date, e_Lv) `+
//                            `SELECT * FROM (SELECT '${jNumber}' AS e_JobNumber, '${name}' AS e_Name, '${passWord}' AS e_PassWord, '${email}' AS e_Email, '${date}' AS e_Date, '${lv}' AS e_Lv) AS new_value `+
//                            `WHERE NOT EXISTS (SELECT e_JobNumber FROM employee WHERE e_JobNumber = '${jNumber}') LIMIT 1`;
        
//         await pool.then(con => {
//             return con.query(sql).then((result: any) => {                
//                 if (result.insertId > 0)
//                 {                    
//                     res.status(200).send(true);
//                 }
//                 else
//                 {
//                     res.status(200).send(false);
//                 }
//             });
//         })
//         .catch(err => {
//             res.status(404).send(false);
//         });
//     }

//     public async read(req: Request, res: Response): Promise<void>
//     {
//         // const sql:string = 'SELECT employee.* FROM employee WHERE NOT EXISTS(SELECT recycle.r_ClassId, recycle.r_Title FROM recycle WHERE employee.e_Id = recycle.r_ClassId AND recycle.r_Title = "員工") GROUP BY employee.e_Id';
//         const sql: string = `SELECT e.*, `+
//                             `(SELECT COUNT(*) FROM workhours WHERE e.e_JobNumber = workhours.w_JobNumber AND MONTH(workhours.w_Date) = MONTH(CURDATE())) AS wkcount, `+
//                             `(SELECT COUNT(*) FROM repair WHERE e.e_JobNumber = repair.r_JobNumber AND MONTH(SUBSTRING_INDEX(r_Date, '=', 1)) = MONTH(CURRENT_DATE())) AS rpcount `+
//                             `FROM employee AS e`;
                        
// // SELECT e.*, 
// // (SELECT COUNT(*) FROM workhours WHERE e.e_JobNumber = workhours.w_JobNumber AND workhours.w_Date = CURDATE()) AS wkcount, 
// // (SELECT COUNT(*) FROM repair WHERE e.e_JobNumber = repair.r_JobNumber AND SUBSTRING_INDEX(repair.r_Date, ',', 1)) AS rpcount 
// // FROM employee AS e;
// //                             SELECT e.*, 
// // (SELECT COUNT(*) FROM workhours WHERE e.e_JobNumber = workhours.w_JobNumber) AS wkcount, 
// // (SELECT COUNT(*) FROM repair WHERE e.e_JobNumber = repair.r_JobNumber) AS rpcount 
// // FROM employee AS e
// //         SELECT co.*, 
// //     COALESCE(mod.moduleCount,0) AS moduleCount,
// //     COALESCE(vid.vidCount,0) AS vidCount
// // FROM courses AS co
// //     LEFT JOIN (
// //             SELECT COUNT(*) AS moduleCount, course_id AS courseId 
// //             FROM modules
// //             GROUP BY course_id
// //         ) AS mod
// //         ON mod.courseId = co.id
// //     LEFT JOIN (
// //             SELECT COUNT(*) AS vidCount, course_id AS courseId 
// //             FROM videos
// //             GROUP BY course_id
// //         ) AS vid
// //         ON vid.courseId = co.id
// // ORDER BY co.id DESC
//         await pool.then(con => {
//             return con.query(sql).then((result: Array<Object>) => {
//                 res.status(200).json(result);
//             });
//         })
//         .catch(err => {
//             res.status(404).send([]);
//         });
//     }

//     public async update(req: Request, res: Response): Promise<void>
//     {
//         const data: Employee = req.body;
        
//         let str: string = '';

//         for(const [key, value] of Object.entries(data))
//         {
//             if(value.length)
//             {
//                 if(key == 'e_PassWord')
//                 {
//                     str += `${key}='${md5_PassWord(value)}',`;
//                 }
//                 else
//                 {
//                     str += `${key}='${value}',`;
//                 }
//             }
//         }

//         str = str.replace(/,$/, ' ');        
        
//         // return con.query('UPDATE employee SET ? WHERE e_Id = ?', [data, data.e_Id])
//         const sql: string = `UPDATE employee SET ${str}`+
//                             `WHERE e_Id = ${data.e_Id} AND NOT EXISTS (SELECT * FROM (SELECT 1 FROM employee WHERE e_JobNumber = '${data.e_JobNumber}' AND e_Id <> '${data.e_Id}') temp);`;
//         await pool.then(con => {
//             return con.query(sql).then((result: any) => {
//                 if (result.affectedRows > 0)
//                 {
//                     res.status(200).send(true);
//                 }
//                 else
//                 {
//                     res.status(200).send(false);
//                 }
//             });
//         })
//         .catch(err => {
//             res.status(404).send(false);
//         });
//     }

//     public async delete(req: Request, res: Response): Promise<void>
//     {
//         const id:string = req.params.id;

//         await pool.then(con => {
//             return con.query('DELETE FROM employee WHERE e_Id = ?', [id])
//             .then((result:any) => {
//                 if(result.affectedRows > 0)
//                 {
//                     res.status(200).send(true);
//                 }
//                 else
//                 {
//                     res.status(200).send(false);
//                 }        
//             });
//         })
//         .catch(err => {
//             res.status(404).send(false);
//         });
//     }
}

// check mumber
// const isBase64 = (encodedString:string) => {
//     const regexBase64 = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
//     return regexBase64.test(encodedString);
// }

// create localStorage & get IP    
const md5_PassWord = (passWord:string): string => {
    const md5 = crypto.createHash('md5');
    return md5.update(passWord).digest('hex');
}

export const employeeController = new EmployeeController();