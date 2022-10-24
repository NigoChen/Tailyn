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
exports.employeeController = void 0;
const database_1 = __importDefault(require("./../db/database"));
const crypto_1 = __importDefault(require("crypto"));
class EmployeeController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            const jNumber = data.e_JobNumber;
            const name = data.e_Name;
            const passWord = md5_PassWord(data.e_PassWord);
            const email = data.e_Email;
            const date = data.e_Date;
            const lv = data.e_Lv;
            const sql = `INSERT INTO employee(e_JobNumber, e_Name, e_PassWord, e_Email, e_Date, e_Lv) ` +
                `SELECT * FROM (SELECT '${jNumber}' AS e_JobNumber, '${name}' AS e_Name, '${passWord}' AS e_PassWord, '${email}' AS e_Email, '${date}' AS e_Date, '${lv}' AS e_Lv) AS new_value ` +
                `WHERE NOT EXISTS (SELECT e_JobNumber FROM employee WHERE e_JobNumber = '${jNumber}') LIMIT 1`;
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
            // const sql:string = 'SELECT employee.* FROM employee WHERE NOT EXISTS(SELECT recycle.r_ClassId, recycle.r_Title FROM recycle WHERE employee.e_Id = recycle.r_ClassId AND recycle.r_Title = "員工") GROUP BY employee.e_Id';
            const sql = `SELECT e.*, ` +
                `(SELECT COUNT(*) FROM workhours WHERE e.e_JobNumber = workhours.w_JobNumber AND MONTH(workhours.w_Date) = MONTH(CURDATE())) AS wkcount, ` +
                `(SELECT COUNT(*) FROM repair WHERE e.e_JobNumber = repair.r_JobNumber AND MONTH(SUBSTRING_INDEX(r_Date, '=', 1)) = MONTH(CURRENT_DATE())) AS rpcount ` +
                `FROM employee AS e`;
            // SELECT e.*, 
            // (SELECT COUNT(*) FROM workhours WHERE e.e_JobNumber = workhours.w_JobNumber AND workhours.w_Date = CURDATE()) AS wkcount, 
            // (SELECT COUNT(*) FROM repair WHERE e.e_JobNumber = repair.r_JobNumber AND SUBSTRING_INDEX(repair.r_Date, ',', 1)) AS rpcount 
            // FROM employee AS e;
            //                             SELECT e.*, 
            // (SELECT COUNT(*) FROM workhours WHERE e.e_JobNumber = workhours.w_JobNumber) AS wkcount, 
            // (SELECT COUNT(*) FROM repair WHERE e.e_JobNumber = repair.r_JobNumber) AS rpcount 
            // FROM employee AS e
            //         SELECT co.*, 
            //     COALESCE(mod.moduleCount,0) AS moduleCount,
            //     COALESCE(vid.vidCount,0) AS vidCount
            // FROM courses AS co
            //     LEFT JOIN (
            //             SELECT COUNT(*) AS moduleCount, course_id AS courseId 
            //             FROM modules
            //             GROUP BY course_id
            //         ) AS mod
            //         ON mod.courseId = co.id
            //     LEFT JOIN (
            //             SELECT COUNT(*) AS vidCount, course_id AS courseId 
            //             FROM videos
            //             GROUP BY course_id
            //         ) AS vid
            //         ON vid.courseId = co.id
            // ORDER BY co.id DESC
            yield database_1.default.then(con => {
                return con.query(sql).then((result) => {
                    res.status(200).json(result);
                });
            })
                .catch(err => {
                res.status(404).send([]);
            });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            let str = '';
            for (const [key, value] of Object.entries(data)) {
                if (value.length) {
                    if (key == 'e_PassWord') {
                        str += `${key}='${md5_PassWord(value)}',`;
                    }
                    else {
                        str += `${key}='${value}',`;
                    }
                }
            }
            str = str.replace(/,$/, ' ');
            // return con.query('UPDATE employee SET ? WHERE e_Id = ?', [data, data.e_Id])
            const sql = `UPDATE employee SET ${str}` +
                `WHERE e_Id = ${data.e_Id} AND NOT EXISTS (SELECT * FROM (SELECT 1 FROM employee WHERE e_JobNumber = '${data.e_JobNumber}' AND e_Id <> '${data.e_Id}') temp);`;
            yield database_1.default.then(con => {
                return con.query(sql).then((result) => {
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
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            yield database_1.default.then(con => {
                return con.query('DELETE FROM employee WHERE e_Id = ?', [id])
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
// check mumber
// const isBase64 = (encodedString:string) => {
//     const regexBase64 = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
//     return regexBase64.test(encodedString);
// }
// create localStorage & get IP    
const md5_PassWord = (passWord) => {
    const md5 = crypto_1.default.createHash('md5');
    return md5.update(passWord).digest('hex');
};
exports.employeeController = new EmployeeController();
