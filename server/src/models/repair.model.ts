import mongoose, { Schema } from "mongoose";
import { Repair } from "../interfaces/repair.interface";

const ISchema: Schema = new Schema(
    {
        r_JobNumber: { type: String, required: true},
        r_SerialNumber: { type: String, required: true},
        r_WorkOrder: { type: String, required: true},
        r_Model: { type: String, required: true},
        r_Error: { type: String, required: true},
        r_Process: { type: String, required: true},
        r_Status: { type: String, required: true},
        r_Client: { type: String, required: true},
        r_Date: { type: String, required: true},
        e_Name: { type: String}
    },
    {   
        collection: 'repair',
        versionKey: false
    }
)

export default mongoose.model<Repair>('Repair', ISchema);