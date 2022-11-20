import { Router } from 'express';
import { employeeController } from '../controllers/employee.controller';

class EmployeeRoutes
{
    public router: Router = Router();

    constructor()
    {
        this.config();
    }

    config(): void
    {
        this.router.post('/create', employeeController.create);
        this.router.get('/read', employeeController.read);
        this.router.get('/find/:id', employeeController.find);
        this.router.patch('/update/:id', employeeController.update);
        this.router.delete('/delete/:id', employeeController.delete);
    }
}

const employeeRoutes = new EmployeeRoutes();

export default employeeRoutes.router;