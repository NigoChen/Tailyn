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
        this.router.get('/find/one/:q', repairController.findOne);
        this.router.get('/find/like/:q', repairController.findLike);
        this.router.put('/update', repairController.update);
        this.router.delete('/delete/:id', repairController.delete);
    }
}

const eepairRoutes = new RepairRoutes();

export default eepairRoutes.router;