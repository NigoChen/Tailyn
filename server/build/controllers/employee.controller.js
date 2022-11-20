"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeController = void 0;
const employee_model_1 = __importDefault(require("../models/employee.model"));
const crypto_1 = __importDefault(require("crypto"));
class EmployeeController {
    create(req, res, next) {
        const data = new employee_model_1.default(req.body);
        return data.save()
            .then(result => res.status(201).send(true))
            .catch(error => res.status(500).json(false));
    }
    read(req, res, next) {
        return employee_model_1.default.find()
            .then(result => res.status(200).json(result))
            .catch(error => res.status(500).json(false));
    }
    find(req, res, next) {
        return employee_model_1.default.findById(req.params.id)
            .then(result => res.status(200).json(result))
            .catch(error => res.status(500).json(false));
    }
    update(req, res, next) {
        return employee_model_1.default.findByIdAndUpdate(req.params.id, req.body)
            .then(result => res.status(200).send(true))
            .catch(error => res.status(500).json(false));
    }
    delete(req, res, next) {
        return employee_model_1.default.findByIdAndDelete(req.params.id)
            .then(result => res.status(200).send(true))
            .catch(error => res.status(500).json(false));
    }
}
// check mumber
// const isBase64 = (encodedString:string) => {
//     const regexBase64 = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
//     return regexBase64.test(encodedString);
// }
// create localStorage & get IP    
const md5_PassWord = (passWord) => {
    const md5 = crypto_1.default.createHash('md5');
    return md5.update(passWord).digest('hex');
};
exports.employeeController = new EmployeeController();
