import { Router } from 'express';
import { loginController } from '../controllers/login.controller';

class LoginRoutes
{
    public router: Router = Router();

    constructor()
    {
        this.config();
    }

    config(): void
    {
        this.router.post('', loginController.login);
        // this.router.post('/email', loginController.email);
        // this.router.put('/update', loginController.update);
    }
}

const loginRoutes = new LoginRoutes();

export default loginRoutes.router;