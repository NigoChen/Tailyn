import { Router } from 'express';
import { standController } from '../controllers/stand.controller';

class StandRoutes
{
    public router: Router = Router();

    constructor()
    {
        this.config();
    }

    config(): void
    {
        this.router.post('/create', standController.create);
        this.router.get('/read', standController.read);
        this.router.put('/update', standController.update);
        this.router.delete('/delete/:id', standController.delete);
    }
}

const standRoutes = new StandRoutes();

export default standRoutes.router;