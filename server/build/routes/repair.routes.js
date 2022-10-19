"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const repair_controller_1 = require("../controllers/repair.controller");
class RepairRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/create', repair_controller_1.repairController.create);
        this.router.get('/read', repair_controller_1.repairController.read);
        this.router.delete('/delete/:id', repair_controller_1.repairController.delete);
    }
}
const eepairRoutes = new RepairRoutes();
exports.default = eepairRoutes.router;
