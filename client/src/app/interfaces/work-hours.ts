export interface WorkHours {
    w_Id?: number;
    w_JobNumber: string;
    w_BMinute: string;
    w_OMinute?: string;
    w_WorkOrder: Array<string>;
    w_Model: Array<string>;
    w_Stand: Array<string>;
    w_Quantity: Array<string>;
    w_Remark?: Array<string>;
    w_Time: Date;
    w_BTotal: string;
    w_OTotal: string;
    w_BDeduct: number;
    w_ODeduct: number;
}
