export interface WorkHours {
    w_Id?: number;
    w_JobNumber: string;
    w_BMinute: string;
    w_OMinute?: string;
    w_WorkOrder: string;
    w_Model: string;
    w_Stand: string;
    w_Remark?: string;
    w_Time: Date;
    w_BTotal: string;
    w_OTotal: string;
    w_BDeduct: number;
    w_ODeduct: number;
}
