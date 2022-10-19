"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_controller_1 = require("../controllers/client.controller");
class ClientRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/create', client_controller_1.clientController.create);
        this.router.get('/read', client_controller_1.clientController.read);
        this.router.put('/update', client_controller_1.clientController.update);
        this.router.delete('/delete/:id', client_controller_1.clientController.delete);
    }
}
const clientRoutes = new ClientRoutes();
exports.default = clientRoutes.router;
