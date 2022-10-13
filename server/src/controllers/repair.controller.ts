import { Request, Response } from 'express';
import pool from '../db/database';
import { Employee } from '../interfaces/employee.interface';
import { Repair } from '../interfaces/repair.interface';

class RepairController
{
    public async create(req: Request, res: Response): Promise<void>
    {                
        const data: Repair           = req.body;
        const r_Id: any              = data.r_Id || 0;
        const r_JobNumber: string    = data.r_JobNumber;
        const r_SerialNumber: string = data.r_SerialNumber; 
        const r_WorkOrder: string    = data.r_WorkOrder;
        const r_Model: string        = data.r_Model;
        const r_Error: any        = data.r_Error;
        const r_Process: any      = data.r_Process;
        const r_Status: string       = data.r_Status;
        const r_Client: any       = data.r_Client.toString();
        const r_Date: string         = data.r_Date;        
           
        const sql: string = `REPLACE INTO repair(r_Id, r_JobNumber, r_SerialNumber, r_WorkOrder, r_Model, r_Error, r_Process, r_Status, r_Client, r_Date)`+
                            ` VALUES `+
                            `(${r_Id}, '${r_JobNumber}', '${r_SerialNumber}', '${r_WorkOrder}', '${r_Model}', '${r_Error}', '${r_Process}', '${r_Status}', '${r_Client}', '${r_Date}')`;
                            
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
        // const sql: string = `SELECT w.*, `+ 
        // `SUBSTRING_INDEX(SUBSTRING_INDEX(w.w_BMinute, ',', 3), ',', -1) AS w_BTotal, `+
        // `SUBSTRING_INDEX(SUBSTRING_INDEX(w.w_OMinute, ',', 3), ',',-1) AS w_OTotal, `+
        // `CONVERT(SUBSTRING_INDEX(w.w_BMinute, ',', -1),SIGNED) AS w_BDeduct, `+
        // `CONVERT(SUBSTRING_INDEX(w.w_OMinute, ',', -1),SIGNED) AS w_ODeduct,  `+
        // `s.s_Title, s.s_Code, `+
        // `e.e_JobNumber, e.e_Name `+
        // `FROM workhours w `+
        // `LEFT JOIN stand s ON w.w_Stand = s.s_Code `+
        // `LEFT JOIN employee e ON w.w_JobNumber = e.e_JobNumber`;

        const sql: string = `Select * From repair`;

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
}

export const repairController = new RepairController();