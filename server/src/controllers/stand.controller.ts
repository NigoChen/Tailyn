import { Request, Response } from 'express';
import pool from '../db/database';
import { Stand } from '../interfaces/stand.interface';

class StandController
{
    public async create(req: Request, res: Response): Promise<void>
    {                
        const data: Stand      = req.body;
        const s_Id: any        = data.s_Id || 0;
        const s_Code: string   = data.s_Code;
        const s_Title: string  = data.s_Title;       

        const sql: string = `REPLACE INTO stand(s_Id, s_Code, s_Title)`+
                            ` VALUES `+
                            `(${s_Id}, '${s_Code}', '${s_Title}')`;

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
        const sql: string = 'SELECT * FROM stand';

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
        const data: Stand = req.body;        
        const sql: string = `UPDATE employee SET ? WHERE e_Id = ?', [${data}, ${data.s_Id}]`;
        
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
        const id:string = req.params.id;

        await pool.then(con => {
            return con.query('DELETE FROM stand WHERE s_Id = ?', [id])
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

export const standController = new StandController();