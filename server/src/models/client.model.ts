import mongoose, { Schema } from "mongoose";
import { Client } from "../interfaces/client.interface";

const ISchema: Schema = new Schema(
    {
        c_Id: { type: Number},
        c_Code: { type: String },
        c_Name: { type: String },
        c_WorkOrder: { type: String },
        c_Model: { type: String },
        c_Stand: { type: String },
        c_Stand_Code: { type: String }
    },
    {   
        _id: false,
        collection: 'client',
        versionKey: false
    }
)

export default mongoose.model<Client>('Client', ISchema);