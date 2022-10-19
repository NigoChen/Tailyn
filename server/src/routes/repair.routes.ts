import { Router } from 'express';
import { repairController } from '../controllers/repair.controller';

class RepairRoutes
{
    public router: Router = Router();

    constructor()
    {
        this.config();
    }

    config():void
    {
        this.router.post('/create', repairController.create);
        this.router.get('/read', repairController.read);
        this.router.delete('/delete/:id', repairController.delete);
    }
}

const eepairRoutes = new RepairRoutes();

export default eepairRoutes.router;