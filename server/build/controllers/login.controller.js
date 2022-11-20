"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginController = void 0;
const employee_model_1 = __importDefault(require("../models/employee.model"));
const crypto_1 = __importDefault(require("crypto"));
const nodemailer_1 = __importDefault(require("nodemailer"));
class LoginController {
    login(req, res, next) {
        return employee_model_1.default.find({ e_JobNumber: req.body.jNumber, e_PassWord: req.body.passWord })
            .then(result => res.status(200).json(result))
            .catch(error => res.status(500).json(false));
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
    let html = `<h3>來至IP <u>${ip}</u> 發送了，密碼重新設定通知書，<p>請在5分鐘內輸入代碼: ${code}</p></h3>`;
    return html;
};
exports.loginController = new LoginController();
