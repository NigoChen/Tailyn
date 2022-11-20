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
        // this.router.post('/create', workHoursController.create);
        // this.router.get('/read', workHoursController.read);
        // this.router.delete('/delete/:id', workHoursController.delete);
    }
}

const workHoursRoutes = new WorkHoursRoutes();

export default workHoursRoutes.router;