"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const stand_controller_1 = require("../controllers/stand.controller");
class StandRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/create', stand_controller_1.standController.create);
        this.router.get('/read', stand_controller_1.standController.read);
        this.router.put('/update', stand_controller_1.standController.update);
        this.router.delete('/delete/:id', stand_controller_1.standController.delete);
    }
}
const standRoutes = new StandRoutes();
exports.default = standRoutes.router;
