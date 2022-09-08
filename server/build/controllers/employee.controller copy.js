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
const nodemailer_1 = __importDefault(require("nodemailer"));
const database_1 = __importDefault(require("./../db/database"));
const crypto_1 = __importDefault(require("crypto"));
class EmployeeController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            const name = data.e_Name;
            const email = data.e_Email;
            const jNumber = data.e_JobNumber;
            const passWord = md5_PassWord(data.e_PassWord);
            const lv = data.e_Lv;
            const sql = `INSERT INTO employee(e_JobNumber, e_Name, e_PassWord, e_Email, e_Lv) ` +
                `SELECT * FROM (SELECT '${jNumber}' AS e_JobNumber, '${name}' AS e_Name, '${passWord}' AS e_PassWord, '${email}' AS e_Email, '${lv}' AS e_Lv) AS new_value ` +
                `WHERE NOT EXISTS (SELECT e_JobNumber FROM employee WHERE e_JobNumber = '${jNumber}') LIMIT 1`;
            yield database_1.default.then(con => {
                return con.query(sql)
                    .then((result) => {
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
            const sql = 'SELECT * FROM employee';
            yield database_1.default.then(con => {
                return con.query(sql)
                    .then((result) => {
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
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            data.passWord = md5_PassWord(data.passWord);
            const sql = `SELECT * FROM employee WHERE e_JobNumber = '${data.jNumber}' AND e_PassWord = '${data.passWord}'`;
            yield database_1.default.then(con => {
                return con.query(sql)
                    .then((result) => {
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
    findOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = JSON.parse(req.params.q);
            yield database_1.default.then(con => {
                return con.query(`SELECT e_JobNumber,e_Name,e_Email,e_Lv,e_Inventory,e_Img FROM employee WHERE e_Name = '${user.e_Name}' AND e_JobNumber = '${user.e_JobNumber}'`)
                    .then((result) => {
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
    findLike(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // con.query('DESCRIBE employee');
            const like = req.params.q;
            yield database_1.default.then(con => {
                return con.query(`SELECT * FROM employee WHERE e_JobNumber = '${like}' OR e_Name = '${like}'`)
                    .then((result) => {
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
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            yield database_1.default.then(con => {
                let query_;
                if ('e_PassWord' in data) {
                    if (data.e_PassWord.length > 2) {
                        data.e_PassWord = md5_PassWord(data.e_PassWord);
                        query_ = con.query('UPDATE employee SET ? WHERE e_Id = ?', [data, data.e_Id]);
                    }
                    else {
                        query_ = con.query(`UPDATE employee SET e_JobNumber = '${data.e_JobNumber}',e_Name = '${data.e_Name}',e_Email = '${data.e_Email}',e_Lv = '${data.e_Lv}' WHERE e_Name = '${data.e_Name}' AND e_JobNumber = '${data.e_JobNumber}'`);
                    }
                }
                else if ('e_Email' in data) {
                    query_ = con.query(`UPDATE employee SET e_Name = '${data.e_Name}',e_PassWord = '${data.e_PassWord}',e_Email = '${data.e_Email}' WHERE e_Id = '${data.e_Id}' AND e_JobNumber = '${data.e_JobNumber}'`);
                }
                return query_
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
    update_PassWord(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            if (email_Code == data.code) {
                yield database_1.default.then(con => {
                    data.newPassWord = md5_PassWord(data.newPassWord);
                    return con.query(`UPDATE employee SET e_PassWord = '${data.newPassWord}' WHERE e_JobNumber = '${data.jNumber}' AND e_Email = '${data.email}'`)
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
            }
            else {
                res.status(200).send(false);
            }
        });
    }
    concat(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            yield database_1.default.then(con => {
                const query_ = con.query(`UPDATE employee SET e_Inventory = CONCAT(e_Inventory, ',') WHERE e_Name = '${data.e_Name}' AND e_JobNumber = '${data.e_JobNumber}'`);
                // const query_ = con.query(`UPDATE employee SET e_Inventory = CONCAT(e_Inventory, '${data.e_Inventory},') WHERE e_Name = '${data.e_Name}' AND e_JobNumber = '${data.e_JobNumber}'`);
                return query_
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
    replace(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            yield database_1.default.then(con => {
                const query_ = con.query(`UPDATE employee SET e_Inventory = REPLACE(TRIM(e_Inventory), ',', '') WHERE e_Name = '${data.e_Name}' AND e_JobNumber = '${data.e_JobNumber}'`);
                // const query_ = con.query(`UPDATE employee SET e_Inventory = REPLACE(TRIM(e_Inventory), '${data.e_Inventory},', '') WHERE e_Name = '${data.e_Name}' AND e_JobNumber = '${data.e_JobNumber}'`);
                return query_
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
    email(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            if (('email' in data) && ('jNumber' in data) && ('ip' in data)) {
                yield database_1.default.then(con => {
                    return con.query(`SELECT e_JobNumber,e_Email FROM employee WHERE e_JobNumber = '${data.jNumber}' AND e_Email = '${data.email}'`)
                        .then((result) => {
                        if (result.length > 0) {
                            send_Email(data.ip, result[0].e_Email);
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
            }
            else {
                res.status(200).send(true);
            }
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
// Create MD5 Hex Number
let email_Code = '';
const md5_Code = () => {
    const md5 = crypto_1.default.createHash('md5');
    const ramdom_Number = Math.floor(Math.random() * 100);
    const code = md5.update(ramdom_Number.toString()).digest('hex');
    email_Code = code;
    return code;
};
// Email Setting
const send_Email = (user_Ip, user_Email) => {
    // emailHtml(user_Ip)
    // email setting
    const transporter = nodemailer_1.default.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'qwe286454@gmail.com',
            pass: 'hmvpslfwussddpfx'
        }
    });
    // email content
    const mailOptions = {
        from: '<qwe286454@gmail.com>',
        to: `<${user_Email}>`,
        subject: 'Tailyn 員工密碼通知書',
        html: emailHtml(user_Ip)
    };
    // send email
    transporter.sendMail(mailOptions, function (err) {
        if (err) {
            console.log(err);
        }
    });
    transporter.close();
};
const emailHtml = (ip) => {
    const code = md5_Code();
    console.log(code);
    let html = `<h3>來至IP <u>${ip}</u> 發送了，密碼重新設定通知書，<p>請在5分鐘內輸入代碼: ${code}</p></h3>`;
    return html;
};
exports.employeeController = new EmployeeController();
