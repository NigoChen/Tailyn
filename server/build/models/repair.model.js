"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const ISchema = new mongoose_1.Schema({
    r_JobNumber: { type: String, required: true },
    r_SerialNumber: { type: String, required: true },
    r_WorkOrder: { type: String, required: true },
    r_Model: { type: String, required: true },
    r_Error: { type: String, required: true },
    r_Process: { type: String, required: true },
    r_Status: { type: String, required: true },
    r_Client: { type: String, required: true },
    r_Date: { type: String, required: true },
    e_Name: { type: String }
}, {
    collection: 'repair',
    versionKey: false
});
exports.default = mongoose_1.default.model('Repair', ISchema);
