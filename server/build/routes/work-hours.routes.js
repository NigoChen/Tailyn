"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const work_hours_controller_1 = require("../controllers/work-hours.controller");
class WorkHoursRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/create', work_hours_controller_1.workHoursController.create);
        this.router.get('/read', work_hours_controller_1.workHoursController.read);
        this.router.delete('/delete/:id', work_hours_controller_1.workHoursController.delete);
    }
}
const workHoursRoutes = new WorkHoursRoutes();
exports.default = workHoursRoutes.router;
