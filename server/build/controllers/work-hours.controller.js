"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.workHoursController = void 0;
const database_1 = __importDefault(require("../db/database"));
class WorkHoursController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            const w_Id = data.w_Id || 0;
            const w_JobNumber = data.w_JobNumber;
            const w_BMinute = data.w_BMinute;
            const w_OMinute = data.w_OMinute;
            const w_WorkOrder = data.w_WorkOrder;
            const w_Model = data.w_Model;
            const w_Stand = data.w_Stand;
            const w_Quantity = data.w_Quantity;
            const w_Remark = data.w_Remark;
            const w_Date = data.w_Date;
            const sql = `REPLACE INTO workhours(w_Id, w_JobNumber, w_BMinute, w_OMinute, w_WorkOrder, w_Model, w_Stand, w_Quantity, w_Remark, w_Date)` +
                ` VALUES ` +
                `(${w_Id}, '${w_JobNumber}', '${w_BMinute}', '${w_OMinute}', '${w_WorkOrder}', '${w_Model}', '${w_Stand}', '${w_Quantity}', '${w_Remark}', '${w_Date}')`;
            // const sql: string = `REPLACE INTO workhours(w_JobNumber, w_BMinute, w_OMinute, w_OMinute, w_WorkOrder, w_Model, w_Stand, w_Remark, w_Date) `+
            //                    `SELECT * FROM (SELECT '${w_JobNumber}' AS w_JobNumber, '${w_BMinute}' AS w_BMinute,`+
            //                    `'${w_OMinute}' AS w_OMinute, '${w_WorkOrder}' AS w_WorkOrder, '${w_Model}' AS w_Model, '${w_Stand}' AS w_Stand, '${w_Remark}' AS w_Remark, '${w_Date}' AS w_Date) AS new_value `+
            //                    `WHERE NOT EXISTS (SELECT w_JobNumber FROM employee WHERE e_JobNumber = '${jNumber}') LIMIT 1`;
            yield database_1.default.then(con => {
                return con.query(sql).then((result) => {
                    if (result.insertId > 0) {
                        res.status(200).send(true);
                    }
                    else {
                        res.status(200).send(false);
                    }
                });
            })
                .catch(err => {
                res.status(404).send(false);
            });
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = `SELECT w.*, ` +
                `SUBSTRING_INDEX(SUBSTRING_INDEX(w.w_BMinute, ',', 3), ',', -1) AS w_BTotal, ` +
                `SUBSTRING_INDEX(SUBSTRING_INDEX(w.w_OMinute, ',', 3), ',',-1) AS w_OTotal, ` +
                `CONVERT(SUBSTRING_INDEX(w.w_BMinute, ',', -1),SIGNED) AS w_BDeduct, ` +
                `CONVERT(SUBSTRING_INDEX(w.w_OMinute, ',', -1),SIGNED) AS w_ODeduct,  ` +
                `e.e_JobNumber, e.e_Name ` +
                `FROM workhours w ` +
                `LEFT JOIN employee e ON w.w_JobNumber = e.e_JobNumber`;
            // const sql: string = `SELECT w.*, `+ 
            // `SUBSTRING_INDEX(SUBSTRING_INDEX(w.w_BMinute, ',', 3), ',', -1) AS w_BTotal, `+
            // `SUBSTRING_INDEX(SUBSTRING_INDEX(w.w_OMinute, ',', 3), ',',-1) AS w_OTotal, `+
            // `CONVERT(SUBSTRING_INDEX(w.w_BMinute, ',', -1),SIGNED) AS w_BDeduct, `+
            // `CONVERT(SUBSTRING_INDEX(w.w_OMinute, ',', -1),SIGNED) AS w_ODeduct,  `+
            // `s.s_Title, s.s_Code, `+
            // `e.e_JobNumber, e.e_Name `+
            // `FROM workhours w `+
            // `LEFT JOIN client c ON w.w_Stand = c.c_Stand_Code `+
            // `LEFT JOIN employee e ON w.w_JobNumber = e.e_JobNumber`;
            yield database_1.default.then(con => {
                return con.query(sql).then((result) => {
                    if (result.length > 0) {
                        res.status(200).json(result);
                    }
                    else {
                        res.status(200).json([]);
                    }
                });
            })
                .catch(err => {
                res.status(404).send([]);
            });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            yield database_1.default.then(con => {
                return con.query('DELETE FROM workhours WHERE w_Id = ?', [id])
                    .then((result) => {
                    if (result.affectedRows > 0) {
                        res.status(200).send(true);
                    }
                    else {
                        res.status(200).send(false);
                    }
                });
            })
                .catch(err => {
                res.status(404).send(false);
            });
        });
    }
}
exports.workHoursController = new WorkHoursController();
