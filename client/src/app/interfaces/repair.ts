export interface Repair {
    r_Id?: number;
    r_JobNumber: string;
    r_Client: string;
    r_Status: string;
    r_SerialNumber: string;
    r_WorkOrder: string;
    r_Model: string;
    r_EorrCode: string;
    r_Process: string;
    r_BadResons?: string;
    r_WorkTime: string;
    r_Remark?: string;
    r_Result: string;
    r_Time: string;
}
