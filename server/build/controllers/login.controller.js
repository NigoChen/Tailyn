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
exports.loginController = void 0;
const database_1 = __importDefault(require("../db/database"));
const crypto_1 = __importDefault(require("crypto"));
class LoginController {
    // Login
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            data.passWord = md5_PassWord(data.passWord);
            const sql = `SELECT e_JobNumber, e_Name, e_Lv FROM employee WHERE e_JobNumber = '${data.jNumber}' AND e_PassWord = '${data.passWord}'`;
            yield database_1.default.then(con => {
                return con.query(sql).then((result) => {
                    if (result.length > 0) {
                        res.status(200).json(result);
                    }
                    else {
                        res.status(200).json([]);
                    }
                });
            }).catch(err => res.status(404).send([]));
        });
    }
    // Update Password
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            if (email_Code == data.code) {
                data.newPassWord = md5_PassWord(data.newPassWord);
                const sql = `UPDATE employee SET e_PassWord = '${data.newPassWord}' WHERE e_JobNumber = '${data.jNumber}' AND e_Email = '${data.email}'`;
                yield database_1.default.then(con => {
                    return con.query(sql).then((result) => {
                        if (result.affectedRows > 0) {
                            res.status(200).send(true);
                        }
                        else {
                            res.status(200).send(false);
                        }
                    });
                }).catch(err => res.status(404).send([]));
            }
            else {
                res.status(200).send(false);
            }
        });
    }
    email(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            if (('email' in data) && ('jNumber' in data) && ('ip' in data)) {
                const sql = `SELECT e_JobNumber,e_Email FROM employee WHERE e_JobNumber = '${data.jNumber}' AND e_Email = '${data.email}'`;
                yield database_1.default.then(con => {
                    return con.query(sql).then((result) => {
                        if (result.length > 0) {
                            send_Email(data.ip, result[0].e_Email);
                            res.status(200).send(true);
                        }
                        else {
                            res.status(200).send(false);
                        }
                    });
                }).catch(err => res.status(404).send([]));
            }
            else {
                res.status(200).send(true);
            }
        });
    }
}
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
    emailHtml(user_Ip);
    // // email setting
    // const transporter = nodemailer.createTransport({
    //     host: 'smtp.gmail.com',
    //     port: 587,
    //     secure: false,
    //     auth: {
    //         user: 'qwe286454@gmail.com',
    //         pass: 'hmvpslfwussddpfx'
    //     }
    // });
    // // email content
    // const mailOptions = {
    //     from: '<qwe286454@gmail.com>',
    //     to: `<${user_Email}>`,
    //     subject: 'Tailyn 員工密碼通知書',
    //     html: emailHtml(user_Ip)
    // }
    // // send email
    // transporter.sendMail(mailOptions, function(err) {        
    //     if (err)
    //     {
    //         console.log(err);            
    //     }
    // });
    // transporter.close();
};
const emailHtml = (ip) => {
    const code = md5_Code();
    console.log(code);
    let html = `<h3>來至IP <u>${ip}</u> 發送了，密碼重新設定通知書，<p>請在5分鐘內輸入代碼: ${code}</p></h3>`;
    return html;
};
exports.loginController = new LoginController();
