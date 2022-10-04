import { Request, Response } from 'express';
import pool from '../db/database';
import { Employee } from '../interfaces/employee.interface';
import { WorkHours } from '../interfaces/work-hours.interface';

class WorkHoursController
{
    public async create(req: Request, res: Response): Promise<void>
    {                
        const data: WorkHours      = req.body;
        const w_Id: any            = data.w_Id || 0;
        const w_JobNumber: string  = data.w_JobNumber;
        const w_BMinute: string    = data.w_BMinute;
        const w_OMinute: any       = data.w_OMinute;
        const w_WorkOrder: string  = data.w_WorkOrder;
        const w_Model: string      = data.w_Model;
        const w_Stand: string      = data.w_Stand;
        const w_Quantity: string   = data.w_Quantity;
        const w_Remark: any        = data.w_Remark;
        const w_Date: Date         = data.w_Date;                

        const sql: string = `REPLACE INTO workhours(w_Id, w_JobNumber, w_BMinute, w_OMinute, w_WorkOrder, w_Model, w_Stand, w_Quantity, w_Remark, w_Date)`+
                            ` VALUES `+
                            `(${w_Id}, '${w_JobNumber}', '${w_BMinute}', '${w_OMinute}', '${w_WorkOrder}', '${w_Model}', '${w_Stand}', '${w_Quantity}', '${w_Remark}', '${w_Date}')`;
                            
        // const sql: string = `REPLACE INTO workhours(w_JobNumber, w_BMinute, w_OMinute, w_OMinute, w_WorkOrder, w_Model, w_Stand, w_Remark, w_Date) `+
        //                    `SELECT * FROM (SELECT '${w_JobNumber}' AS w_JobNumber, '${w_BMinute}' AS w_BMinute,`+
        //                    `'${w_OMinute}' AS w_OMinute, '${w_WorkOrder}' AS w_WorkOrder, '${w_Model}' AS w_Model, '${w_Stand}' AS w_Stand, '${w_Remark}' AS w_Remark, '${w_Date}' AS w_Date) AS new_value `+
        //                    `WHERE NOT EXISTS (SELECT w_JobNumber, FROM employee WHERE e_JobNumber = '${jNumber}') LIMIT 1`;
        
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
        const sql: string = `SELECT w.*, `+ 
        `SUBSTRING_INDEX(SUBSTRING_INDEX(w.w_BMinute, ',', 3), ',', -1) AS w_BTotal, `+
        `SUBSTRING_INDEX(SUBSTRING_INDEX(w.w_OMinute, ',', 3), ',',-1) AS w_OTotal, `+
        `CONVERT(SUBSTRING_INDEX(w.w_BMinute, ',', -1),SIGNED) AS w_BDeduct, `+
        `CONVERT(SUBSTRING_INDEX(w.w_OMinute, ',', -1),SIGNED) AS w_ODeduct,  `+
        `s.s_Title, s.s_Code, `+
        `e.e_JobNumber, e.e_Name `+
        `FROM workhours w `+
        `LEFT JOIN stand s ON w.w_Stand = s.s_Code `+
        `LEFT JOIN employee e ON w.w_JobNumber = e.e_JobNumber`;

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
        const sql: string = `UPDATE employee SET e_JobNumber = '${data.e_JobNumber}', e_Name = '${data.e_Name}', e_Email = '${data.e_Email}', e_Lv = '${data.e_Lv}' WHERE e_Id = ${data.e_Id} AND NOT EXISTS (SELECT * FROM (SELECT 1 FROM employee WHERE e_JobNumber = '${data.e_JobNumber}' AND e_Id <> '${data.e_Id}') temp);`;
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

    public async delete(req: Request, res: Response): Promise<void>
    {
        const id: string = req.params.id;

        await pool.then(con => {
            return con.query('DELETE FROM workhours WHERE w_Id = ?', [id])
            .then((result: any) => {
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

export const workHoursController = new WorkHoursController();