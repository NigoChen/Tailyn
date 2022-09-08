import { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import pool from '../db/database';
import { Employee } from '../interfaces/employee.interface';
import crypto from 'crypto';

class LoginController
{
    // Login
    public async login(req: Request, res: Response): Promise<void>
    {
        const data: any = req.body;        
        
        data.passWord = md5_PassWord(data.passWord);

        const sql: string = `SELECT e_JobNumber, e_Name, e_Lv FROM employee WHERE e_JobNumber = '${data.jNumber}' AND e_PassWord = '${data.passWord}'`;

        await pool.then(con => {
            return con.query(sql).then((result:Array<Object>) => {
                if(result.length > 0)
                {
                    res.status(200).json(result);                    
                }
                else
                {
                    res.status(200).json([]);
                }
            });
        }).catch(err => res.status(404).send([]));
    }

    // Update Password
    public async update(req: Request, res: Response): Promise<void>
    {
        const data: any = req.body;

        if(email_Code == data.code)
        {
            data.newPassWord = md5_PassWord(data.newPassWord);

            const sql: string = `UPDATE employee SET e_PassWord = '${data.newPassWord}' WHERE e_JobNumber = '${data.jNumber}' AND e_Email = '${data.email}'`;

            await pool.then(con => {
                return con.query(sql).then((result: any) => {
                    if (result.affectedRows > 0)
                    {
                        res.status(200).send(true);
                    }
                    else
                    {
                        res.status(200).send(false);
                    }
                });
            }).catch(err => res.status(404).send([]));
        }
        else
        {
            res.status(200).send(false);
        }
    }

    public async email(req: Request, res: Response): Promise<void>
    {
        const data: any = req.body;

        if(('email' in data) && ('jNumber' in data) && ('ip' in data))
        {                        
            const sql: string = `SELECT e_JobNumber,e_Email FROM employee WHERE e_JobNumber = '${data.jNumber}' AND e_Email = '${data.email}'`;

            await pool.then(con => {
                return con.query(sql).then((result: Employee[]) => {
                    if (result.length > 0)
                    {                        
                        send_Email(data.ip, result[0].e_Email);

                        res.status(200).send(true);
                    }
                    else
                    {
                        res.status(200).send(false);
                    }
                });
            }).catch(err => res.status(404).send([]));
        }
        else
        {
            res.status(200).send(true);
        }
    }
}

// create localStorage & get IP    
const md5_PassWord = (passWord:string): string => {
    const md5 = crypto.createHash('md5');
    return md5.update(passWord).digest('hex');
}

// Create MD5 Hex Number
let email_Code: string = '';

const md5_Code = (): string => {
    const md5 = crypto.createHash('md5');
    const ramdom_Number:number = Math.floor(Math.random() * 100);
    const code:string = md5.update(ramdom_Number.toString()).digest('hex');    
    email_Code = code;
    return code;
}

// Email Setting
const send_Email = (user_Ip: string, user_Email: string): void =>  {

    emailHtml(user_Ip)
    
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
}

const emailHtml = (ip: string): string => {
    
    const code: string = md5_Code();

    console.log(code);
    
    let html: string = `<h3>來至IP <u>${ip}</u> 發送了，密碼重新設定通知書，<p>請在5分鐘內輸入代碼: ${code}</p></h3>`;
    return html;
}

export const loginController = new LoginController();