"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class WorkHoursRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        // this.router.post('/create', workHoursController.create);
        // this.router.get('/read', workHoursController.read);
        // this.router.delete('/delete/:id', workHoursController.delete);
    }
}
const workHoursRoutes = new WorkHoursRoutes();
exports.default = workHoursRoutes.router;
