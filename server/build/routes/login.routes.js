"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_controller_1 = require("../controllers/login.controller");
class LoginRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('', login_controller_1.loginController.login);
        // this.router.post('/email', loginController.email);
        // this.router.put('/update', loginController.update);
    }
}
const loginRoutes = new LoginRoutes();
exports.default = loginRoutes.router;
