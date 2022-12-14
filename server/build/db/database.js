"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_mysql_1 = __importDefault(require("promise-mysql"));
const key_1 = __importDefault(require("./key"));
const pool = promise_mysql_1.default.createPool(key_1.default.database);
exports.default = pool;
