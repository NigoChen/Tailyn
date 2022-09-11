import { AbstractControl, FormGroup } from "@angular/forms";

export let ErrorValidators: object = {};

export const Reset_Validators = (fbGroup: FormGroup): void => {    
    Object.keys(fbGroup.controls).forEach((key: any, index: number) => {    
        ErrorValidators[key] = '';
    });
}

export const InputValidators = (fbGroup: AbstractControl, controlsName: string = ''): any => {

    if(controlsName.length)
    {
        const errorKey: any = fbGroup.get(controlsName).errors;        
    
        ErrorValidators[controlsName] = '';        
    
        if(errorKey != null)
        {
            if(errorKey.required)
            {
                ErrorValidators[controlsName] = '未輸入';
            }

            if(errorKey.pattern)
            {
                ErrorValidators[controlsName] = '格式不符';
            }
        }
        
        return ErrorValidators[controlsName];
    }
}
