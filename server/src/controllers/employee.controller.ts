import { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import pool from './../db/database';
import { Employee } from '../interfaces/employee.interface';
import crypto from 'crypto';

class EmployeeController
{
    public async create(req: Request, res: Response): Promise<void>
    {        
        const data: Employee    = req.body;
        const jNumber: string   = data.e_JobNumber;
        const name: string      = data.e_Name;
        const passWord: string  = md5_PassWord(data.e_PassWord);
        const email: string     = data.e_Email;
        const date: string      = data.e_Date;
        const lv: number        = data.e_Lv;

        const sql: string = `INSERT INTO employee(e_JobNumber, e_Name, e_PassWord, e_Email, e_Date, e_Lv) `+
                           `SELECT * FROM (SELECT '${jNumber}' AS e_JobNumber, '${name}' AS e_Name, '${passWord}' AS e_PassWord, '${email}' AS e_Email, '${date}' AS e_Date, '${lv}' AS e_Lv) AS new_value `+
                           `WHERE NOT EXISTS (SELECT e_JobNumber FROM employee WHERE e_JobNumber = '${jNumber}') LIMIT 1`;
        
        await pool.then(con => {
            return con.query(sql).then((result: any) => {                
                if (result.insertId > 0)
                {                    
                    res.status(200).send(true);
                }
                else
                {
                    res.status(200).send(false);
                }
            });
        })
        .catch(err => {
            res.status(404).send(false);
        });
    }

    public async read(req: Request, res: Response): Promise<void>
    {
        // const sql:string = 'SELECT employee.* FROM employee WHERE NOT EXISTS(SELECT recycle.r_ClassId, recycle.r_Title FROM recycle WHERE employee.e_Id = recycle.r_ClassId AND recycle.r_Title = "員工") GROUP BY employee.e_Id';
        const sql: string = 'SELECT * FROM employee';

        await pool.then(con => {
            return con.query(sql).then((result: Array<Object>) => {
                if(result.length > 0)
                {
                    res.status(200).json(result);
                }
                else
                {
                    res.status(200).json([]);
                }
            });
        })
        .catch(err => {
            res.status(404).send([]);
        });
    }

    public async login(req: Request, res: Response): Promise<void>
    {
        const data: any = req.body;
        
        data.passWord = md5_PassWord(data.passWord);

        const sql: string = `SELECT * FROM employee WHERE e_JobNumber = '${data.jNumber}' AND e_PassWord = '${data.passWord}'`;

        await pool.then(con => {
            return con.query(sql).then((result: Array<Object>) => {
                if(result.length > 0)
                {
                    res.status(200).json(result);                    
                }
                else
                {
                    res.status(200).json([]);
                }
            });
        })
        .catch(err => {
            res.status(404).send([]);
        });
    }

    public async findOne(req: Request, res: Response): Promise<void>
    {
        const user:any = JSON.parse(req.params.q);

        const sql: string = `SELECT e_JobNumber,e_Name,e_Email,e_Lv,e_Inventory,e_Img FROM employee WHERE e_Name = '${user.e_Name}' AND e_JobNumber = '${user.e_JobNumber}'`;

        await pool.then(con => {
            return con.query(sql).then((result: Array<Employee>) => {                
                if(result.length > 0)
                {
                    res.status(200).json(result);
                }
                else
                {
                    res.status(200).json([]);
                }
            });
        })
        .catch(err => {
            res.status(404).send([]);
        });
    }

    public async findLike(req: Request, res: Response): Promise<void>
    {
        // con.query('DESCRIBE employee');
        const like = req.params.q;

        const sql: string = `SELECT * FROM employee WHERE e_JobNumber = '${like}' OR e_Name = '${like}'`;

        await pool.then(con => {
            return con.query(sql).then((result: Array<Object>) => {
                if(result.length > 0)
                {
                    res.status(200).json(result);
                }
                else
                {
                    res.status(200).json([]);
                }
            });
        })
        .catch(err => {
            res.status(404).send([]);
        });
    }

    public async update(req: Request, res: Response): Promise<void>
    {
        const data: Employee = req.body;        
        // const sql: string = `UPDATE employee SET e_JobNumber = '${data.e_JobNumber}', e_Name = '${data.e_Name}',e_Email = '${data.e_Email}',e_Lv = '${data.e_Lv}' WHERE e_Id = '${data.e_Id}' AND e_JobNumber <> '${data.e_JobNumber}'`;
        // return con.query('UPDATE employee SET ? WHERE e_Id = ?', [data, data.e_Id])
        const sql: string = `UPDATE employee SET e_JobNumber = '${data.e_JobNumber}', e_Name = '${data.e_Name}', e_Email = '${data.e_Email}', e_Date = '${data.e_Date}', e_Lv = '${data.e_Lv}' `+
                            `WHERE e_Id = ${data.e_Id} AND NOT EXISTS (SELECT * FROM (SELECT 1 FROM employee WHERE e_JobNumber = '${data.e_JobNumber}' AND e_Id <> '${data.e_Id}') temp);`;
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
        })
        .catch(err => {
            res.status(404).send(false);
        });
    }

    public async update_PassWord(req: Request, res: Response): Promise<void>
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
            })
            .catch(err => {
                res.status(404).send(false);
            });
        }
        else
        {
            res.status(200).send(false);
        }
    }

    public async concat(req: Request, res: Response): Promise<void>
    {
        const data:Employee = req.body;

        const sql: string = `UPDATE employee SET e_Inventory = CONCAT(e_Inventory, ',') WHERE e_Name = '${data.e_Name}' AND e_JobNumber = '${data.e_JobNumber}'`;
        // const query_ = con.query(`UPDATE employee SET e_Inventory = CONCAT(e_Inventory, '${data.e_Inventory},') WHERE e_Name = '${data.e_Name}' AND e_JobNumber = '${data.e_JobNumber}'`);
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
        })
        .catch(err => {
            res.status(404).send(false);
        });
    }
    
    public async replace(req: Request, res: Response): Promise<void>
    {
        const data:Employee = req.body;

        await pool.then(con => {
            const sql: string = `UPDATE employee SET e_Inventory = REPLACE(TRIM(e_Inventory), ',', '') WHERE e_Name = '${data.e_Name}' AND e_JobNumber = '${data.e_JobNumber}'`;
            // const query_ = con.query(`UPDATE employee SET e_Inventory = REPLACE(TRIM(e_Inventory), '${data.e_Inventory},', '') WHERE e_Name = '${data.e_Name}' AND e_JobNumber = '${data.e_JobNumber}'`);

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
        })
        .catch(err => {
            res.status(404).send(false);
        });
    }

    public async delete(req: Request, res: Response): Promise<void>
    {
        const id:string = req.params.id;

        await pool.then(con => {
            return con.query('DELETE FROM employee WHERE e_Id = ?', [id])
            .then((result:any) => {
                if(result.affectedRows > 0)
                {
                    res.status(200).send(true);
                }
                else
                {
                    res.status(200).send(false);
                }        
            });
        })
        .catch(err => {
            res.status(404).send(false);
        });
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
            })
            .catch(err => {
                res.status(404).send(false);
            });
        }
        else
        {
            res.status(200).send(true);
        }
    }
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

// Create MD5 Hex Number
let email_Code:string = '';

const md5_Code = (): string => {
    const md5 = crypto.createHash('md5');
    const ramdom_Number:number = Math.floor(Math.random() * 100);
    const code:string = md5.update(ramdom_Number.toString()).digest('hex');    
    email_Code = code;
    return code;
}

// Email Setting
const send_Email = (user_Ip: string, user_Email: string): void =>  {

    // emailHtml(user_Ip)
    
    // email setting
    const transporter = nodemailer.createTransport({
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
    }

    // send email
    transporter.sendMail(mailOptions, function(err) {        
        if (err)
        {
            console.log(err);            
        }
    });

    transporter.close();
}

const emailHtml = (ip: string): string => {
    
    const code: string = md5_Code();

    console.log(code);
    
    let html: string = `<h3>來至IP <u>${ip}</u> 發送了，密碼重新設定通知書，<p>請在5分鐘內輸入代碼: ${code}</p></h3>`;
    return html;
}

export const employeeController = new EmployeeController();