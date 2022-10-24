import { Request, Response } from 'express';
import pool from '../db/database';
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
        //                    `WHERE NOT EXISTS (SELECT w_JobNumber FROM employee WHERE e_JobNumber = '${jNumber}') LIMIT 1`;
        
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
        `e.e_JobNumber, e.e_Name `+
        `FROM workhours w `+
        `LEFT JOIN employee e ON w.w_JobNumber = e.e_JobNumber`;
        
        // const sql: string = `SELECT w.*, `+ 
        // `SUBSTRING_INDEX(SUBSTRING_INDEX(w.w_BMinute, ',', 3), ',', -1) AS w_BTotal, `+
        // `SUBSTRING_INDEX(SUBSTRING_INDEX(w.w_OMinute, ',', 3), ',',-1) AS w_OTotal, `+
        // `CONVERT(SUBSTRING_INDEX(w.w_BMinute, ',', -1),SIGNED) AS w_BDeduct, `+
        // `CONVERT(SUBSTRING_INDEX(w.w_OMinute, ',', -1),SIGNED) AS w_ODeduct,  `+
        // `e.e_JobNumber, e.e_Name `+
        // `FROM workhours w `+
        // `LEFT JOIN employee e ON w.w_JobNumber = e.e_JobNumber`;



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

export const workHoursController = new WorkHoursController();