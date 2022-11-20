"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientController = void 0;
const client_model_1 = __importDefault(require("../models/client.model"));
class ClientController {
    create(req, res, next) {
        const data = new client_model_1.default(req.body);
        return data.save()
            .then(result => res.status(201).send(true))
            .catch(error => res.status(500).json(false));
    }
    read(req, res, next) {
        return client_model_1.default.find()
            .then(result => res.status(200).json(result))
            .catch(error => res.status(500).json(false));
    }
    find(req, res, next) {
        return client_model_1.default.findById(req.params.id)
            .then(result => res.status(200).json(result))
            .catch(error => res.status(500).json(false));
    }
    update(req, res, next) {
        return client_model_1.default.findByIdAndUpdate(req.params.id, req.body)
            .then(result => res.status(200).send(true))
            .catch(error => res.status(500).json(false));
    }
    delete(req, res, next) {
        return client_model_1.default.findByIdAndDelete(req.params.id)
            .then(result => res.status(200).send(true))
            .catch(error => res.status(500).json(false));
    }
}
exports.clientController = new ClientController();
