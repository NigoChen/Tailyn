"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.repairController = void 0;
const repair_model_1 = __importDefault(require("../models/repair.model"));
class RepairController {
    create(req, res, next) {
        return repair_model_1.default.find()
            .then(count => {
            const data = array_to_string(req.body);
            data.r_Id = (count.length + 1);
            return new repair_model_1.default(data).save()
                .then(result => res.status(201).send(true))
                .catch(error => res.status(500).json(false));
        });
    }
    read(req, res, next) {
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
        return repair_model_1.default.aggregate([
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
                $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ["$employee", 0] }, "$$ROOT"] } }
            },
            {
                "$project": {
                    _id: 0,
                    employee: 0,
                    e_Email: 0,
                    e_JobNumber: 0,
                    e_PassWord: 0,
                    e_Lv: 0,
                    e_Date: 0,
                }
            },
            {
                "$sort": { "_id": 1 }
            }
        ])
            .then(result => {
            console.log(result);
            res.status(200).json(result);
        })
            .catch(error => res.status(500).json(false));
    }
    find(req, res, next) {
        return repair_model_1.default.findById(req.params.id)
            .then(result => res.status(200).json(result))
            .catch(error => res.status(500).json(false));
    }
    update(req, res, next) {
        const data = array_to_string(req.body);
        return repair_model_1.default.findOneAndUpdate({ r_Id: data.r_Id }, data)
            .then(result => res.status(200).send(true))
            .catch(error => res.status(500).json(false));
    }
    delete(req, res, next) {
        return repair_model_1.default.findByIdAndDelete(req.params.id)
            .then(result => res.status(200).send(true))
            .catch(error => res.status(500).json(false));
    }
}
const array_to_string = (data) => {
    for (const key in data) {
        if (data[key] instanceof Object) {
            data[key] = data[key].join();
        }
    }
    return data;
};
exports.repairController = new RepairController();
