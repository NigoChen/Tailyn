"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const employee_controller_1 = require("../controllers/employee.controller");
class EmployeeRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/create', employee_controller_1.employeeController.create);
        this.router.post('/login', employee_controller_1.employeeController.login);
        this.router.get('/read', employee_controller_1.employeeController.read);
        this.router.get('/find/one/:q', employee_controller_1.employeeController.findOne);
        this.router.get('/find/like/:q', employee_controller_1.employeeController.findLike);
        this.router.put('/update', employee_controller_1.employeeController.update);
        this.router.put('/update/password', employee_controller_1.employeeController.update_PassWord);
        this.router.put('/concat', employee_controller_1.employeeController.concat);
        this.router.put('/replace', employee_controller_1.employeeController.replace);
        this.router.delete('/delete/:id', employee_controller_1.employeeController.delete);
        this.router.post('/email', employee_controller_1.employeeController.email);
    }
}
const employeeRoutes = new EmployeeRoutes();
exports.default = employeeRoutes.router;
