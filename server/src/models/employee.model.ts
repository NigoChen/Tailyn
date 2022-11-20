import mongoose, { Schema } from "mongoose";
import { Employee } from "../interfaces/employee.interface";

const ISchema: Schema = new Schema(
    {
        e_Name: { type: String, required: true},
        e_Email: { type: String},
        e_JobNumber: { type: String, required: [true, 'Please add a Number.']},
        e_PassWord: { type: String, required: [true, 'Please add a password.']},
        e_Lv: { type: Number,  required: true},
        e_Date: { type: String}
    },
    {   
        collection: 'employee',
        versionKey: false
    }
)

export default mongoose.model<Employee>('Employee', ISchema);