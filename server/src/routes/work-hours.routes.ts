import { Router } from 'express';
import { workHoursController } from '../controllers/work-hours.controller';

class WorkHoursRoutes
{
    public router: Router = Router();

    constructor()
    {
        this.config();
    }

    config():void
    {
        this.router.post('/create', workHoursController.create);
        this.router.get('/read', workHoursController.read);
        this.router.get('/find/one/:q', workHoursController.findOne);
        this.router.get('/find/like/:q', workHoursController.findLike);
        this.router.put('/update', workHoursController.update);
        this.router.delete('/delete/:id', workHoursController.delete);
    }
}

const workHoursRoutes = new WorkHoursRoutes();

export default workHoursRoutes.router;