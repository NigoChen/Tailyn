import { Router } from 'express';
import { employeeController } from '../controllers/employee.controller';

class EmployeeRoutes
{
    public router: Router = Router();

    constructor()
    {
        this.config();
    }

    config():void
    {
        this.router.post('/create', employeeController.create);
        this.router.post('/login', employeeController.login);
        this.router.get('/read', employeeController.read);
        this.router.get('/find/one/:q', employeeController.findOne);
        this.router.get('/find/like/:q', employeeController.findLike);
        this.router.put('/update', employeeController.update);
        this.router.put('/update/password', employeeController.update_PassWord);
        this.router.put('/concat', employeeController.concat);
        this.router.put('/replace', employeeController.replace);
        this.router.delete('/delete/:id', employeeController.delete);
        this.router.post('/email', employeeController.email);
    }
}

const employeeRoutes = new EmployeeRoutes();

export default employeeRoutes.router;