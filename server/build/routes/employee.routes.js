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
        this.router.get('/read', employee_controller_1.employeeController.read);
        this.router.get('/find/:id', employee_controller_1.employeeController.find);
        this.router.patch('/update/:id', employee_controller_1.employeeController.update);
        this.router.delete('/delete/:id', employee_controller_1.employeeController.delete);
    }
}
const employeeRoutes = new EmployeeRoutes();
exports.default = employeeRoutes.router;
