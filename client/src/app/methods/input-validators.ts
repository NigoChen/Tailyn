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
        
        const otherErrorKey: boolean = fbGroup.hasError('passWordMatch');        
    
        ErrorValidators[controlsName] = '';        
    
        if(errorKey != null)
        {                        
            if(errorKey.required)
            {
                ErrorValidators[controlsName] = '未輸入';
            }

            if(errorKey.pattern)
            {
                ErrorValidators[controlsName] = '格式錯';
            }
        }
        else if(otherErrorKey && controlsName == 'e_ConfirmPassword')
        {
            ErrorValidators[controlsName] = '密碼不符';            
        }
        
        return ErrorValidators[controlsName];
    }
}
