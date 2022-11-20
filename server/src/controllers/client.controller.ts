import { NextFunction, Request, Response } from 'express';
import pool from '../db/database';
import { Client } from '../interfaces/client.interface';
import Data from '../models/client.model';

class ClientController
{
    public create(req: Request, res: Response, next: NextFunction): any {
            
        const data = new Data(req.body);

        return data.save()
        .then(result => res.status(201).send(true))
        .catch(error => res.status(500).json(false));
    }

    public read(req: Request, res: Response, next: NextFunction): any {        
        return Data.find()
        .then(result => res.status(200).json(result))
        .catch(error => res.status(500).json(false));
    }

    public find(req: Request, res: Response, next: NextFunction): any {        
        return Data.findById(req.params.id)
        .then(result => res.status(200).json(result))
        .catch(error => res.status(500).json(false));
    }

    public update(req: Request, res: Response, next: NextFunction): any {        
        return Data.findByIdAndUpdate(req.params.id, req.body)
        .then(result => res.status(200).send(true))
        .catch(error => res.status(500).json(false));
    }

    public delete(req: Request, res: Response, next: NextFunction): any {        
        return Data.findByIdAndDelete(req.params.id)
        .then(result => res.status(200).send(true))
        .catch(error => res.status(500).json(false));
    }





    // public async create(req: Request, res: Response): Promise<void>
    // {                
    //     const data: Client      = req.body;
    //     const c_Id: any        = data.c_Id || 0;
    //     const c_Code: string   = data.c_Stand_Code;
    //     const c_Title: string  = data.c_Stand;       

    //     const sql: string = `REPLACE INTO stand(c_Id, c_Code, c_Title)`+
    //                         ` VALUES `+
    //                         `(${c_Id}, '${c_Code}', '${c_Title}')`;

    //     await pool.then(con => {
    //         return con.query(sql).then((result: any) => {                
    //             if (result.insertId > 0)
    //             {                    
    //                 res.status(200).send(true);
    //             }
    //             else
    //             {
    //                 res.status(200).send(false);
    //             }
    //         });
    //     })
    //     .catch(err => {
    //         res.status(404).send(false);
    //     });
    // }

    // public async read(req: Request, res: Response): Promise<void>
    // {
    //     const sql: string = 'SELECT c_Stand, c_Stand_Code FROM client';

    //     await pool.then(con => {
    //         return con.query(sql).then((result: Array<Object>) => {                
    //             if(result.length > 0)
    //             {
    //                 res.status(200).json(result);
    //             }
    //             else
    //             {
    //                 res.status(200).json([]);
    //             }
    //         });
    //     })
    //     .catch(err => {
    //         res.status(404).send([]);
    //     });
    // }

    // public async update(req: Request, res: Response): Promise<void>
    // {
    //     const data: Client = req.body;        
    //     const sql: string = `UPDATE employee SET ? WHERE e_Id = ?', [${data}, ${data.c_Id}]`;
        
    //     await pool.then(con => {
    //         return con.query(sql).then((result: any) => {
    //             if (result.affectedRows > 0)
    //             {
    //                 res.status(200).send(true);
    //             }
    //             else
    //             {
    //                 res.status(200).send(false);
    //             }
    //         });
    //     })
    //     .catch(err => {
    //         res.status(404).send(false);
    //     });
    // }

    // public async delete(req: Request, res: Response): Promise<void>
    // {
    //     const id:string = req.params.id;

    //     await pool.then(con => {
    //         return con.query('DELETE FROM stand WHERE c_Id = ?', [id])
    //         .then((result: any) => {
    //             if(result.affectedRows > 0)
    //             {
    //                 res.status(200).send(true);
    //             }
    //             else
    //             {
    //                 res.status(200).send(false);
    //             }        
    //         });
    //     })
    //     .catch(err => {
    //         res.status(404).send(false);
    //     });
    // }
}

export const clientController = new ClientController();