import { Router } from 'express';
import { clientController } from '../controllers/client.controller';

class ClientRoutes
{
    public router: Router = Router();

    constructor()
    {
        this.config();
    }

    config(): void
    {
        this.router.post('/create', clientController.create);
        this.router.get('/read', clientController.read);
        this.router.put('/update', clientController.update);
        this.router.delete('/delete/:id', clientController.delete);
    }
}

const clientRoutes = new ClientRoutes();

export default clientRoutes.router;