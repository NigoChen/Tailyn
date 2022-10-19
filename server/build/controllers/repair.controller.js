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
exports.repairController = void 0;
const database_1 = __importDefault(require("../db/database"));
class RepairController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            const r_Id = data.r_Id || 0;
            const r_JobNumber = data.r_JobNumber;
            const r_SerialNumber = data.r_SerialNumber;
            const r_WorkOrder = data.r_WorkOrder;
            const r_Model = data.r_Model;
            const r_Error = data.r_Error;
            const r_Process = data.r_Process;
            const r_Status = data.r_Status;
            const r_Client = data.r_Client;
            const r_Date = data.r_Date;
            // const sql: string = `BEGIN;`+
            //                     `REPLACE INTO repair(r_Id, r_JobNumber, r_SerialNumber, r_WorkOrder, r_Model, r_Error, r_Process, r_Status, r_Client, r_Date)`+
            //                     ` VALUES `+
            //                     `(${r_Id}, '${r_JobNumber}', '${r_SerialNumber}', '${r_WorkOrder}', '${r_Model}', '${r_Error}', '${r_Process}', '${r_Status}', '${r_Client}', '${r_Date}');`+
            //                     `REPLACE INTO client(c_Id, c_Code, c_Name)`+
            //                     ` VALUES `+
            //                     `(${r_Id}, '1111', 'OIOIOIO');`+
            //                     `COMMIT;`;
            // const sql_two: string = `REPLACE INTO repair(r_Id, r_JobNumber, r_SerialNumber, r_WorkOrder, r_Model, r_Error, r_Process, r_Status, r_Client, r_Date)`+
            //                         ` VALUES `+
            //                         `('${r_Id}', '${r_JobNumber}', '${r_SerialNumber}', '${r_WorkOrder}', '${r_Model}', '${r_Error}', '${r_Process}', '${r_Status}', '${r_Client}', '${r_Date}')`;
            // const conned = await (await pool).getConnection();
            // await conned.beginTransaction();
            // return await conned.query(sql_one).then(async (result: any) => {
            // await conned.query(sql_two).then(async (result: any) => {
            //     if(result.insertId)
            //     {
            //         await conned.commit();
            //         res.status(200).send(true);
            //     }
            //     else
            //     {
            //         await conned.rollback();
            //         res.status(200).send(false);
            //     }
            //     await conned.release();
            // fieldCount: 0,
            // affectedRows: 1,
            // insertId: 58,
            // serverStatus: 3,
            // warningCount: 0,
            // message: '',
            // protocol41: true,
            // changedRows: 0
            //     })
            //     .catch(async err => {                
            //         await conned.rollback();
            //         await conned.release();
            //         res.status(404).send(false);
            //     });
            // // })
            // .catch(async err => {
            //     console.log('111111122');
            //     await conned.rollback();
            //     await conned.release();
            //     res.status(404).send(false);
            // });
            // }
            // catch
            // {            
            //     await conned.rollback();
            //     await conned.release();
            //     res.status(404).send(false);
            // }
            // BEGIN
            // REPLACE INTO repair(r_Id, r_JobNumber, r_SerialNumber, r_WorkOrder, r_Model, r_Error, r_Process, r_Status, r_Client, r_Date) VALUES (0, '4138', '21272211', 'A.122.3', 'A88723-1', 'C2003,零件破損', '查修中', '待修', 'A3004,宏達電子', '2022-10-16=50');
            // REPLACE INTO client(c_Id, c_Code, c_Name) VALUES (1, 'ssss', 'sszzz');
            // COMMIT
            const sql = `REPLACE INTO repair(r_Id, r_JobNumber, r_SerialNumber, r_WorkOrder, r_Model, r_Error, r_Process, r_Status, r_Client, r_Date)` +
                ` VALUES ` +
                `(${r_Id}, '${r_JobNumber}', '${r_SerialNumber}', '${r_WorkOrder}', '${r_Model}', '${r_Error}', '${r_Process}', '${r_Status}', '${r_Client}', '${r_Date}')`;
            yield database_1.default.then(con => {
                return con.query(sql).then((result) => {
                    if (result.insertId > 0) {
                        // res.status(200).send(true);
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
            const sql = `SELECT repair.*,` +
                `client.c_Code AS 'CODE',` +
                `client.c_Name AS 'NAME' ` +
                `FROM repair, client GROUP BY repair.r_Id;`;
            // const sql: string = `SELECT repair.*, GROUP_CONCAT(client.c_Code SEPARATOR ', ') AS `+
            //                     `'CODE', GROUP_CONCAT(client.c_Name SEPARATOR ', ') AS `+
            //                     `'NAME' FROM repair, client GROUP BY repair.r_Id;`;
            // const sql: string = `Select * From repair`;
            yield database_1.default.then(con => {
                return con.query(sql).then((result) => {
                    if (result.length > 0) {
                        console.log(result);
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
                return con.query('DELETE FROM repair WHERE r_Id = ?', [id])
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
exports.repairController = new RepairController();
