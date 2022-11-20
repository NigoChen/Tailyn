"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const key_1 = __importDefault(require("./key"));
const db = mongoose_1.default.connect(key_1.default.database.host, { retryWrites: true, w: 'majority' });
// const pool = mysql.createPool(keys.database);
db.then(() => console.log('connected'))
    .catch((error) => console.log('fail connected'));
exports.default = db;
