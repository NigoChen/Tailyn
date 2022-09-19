import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const passwordMatchValidator: ValidatorFn = (controls: AbstractControl): ValidationErrors | null => {
    // const validator: object | null = controls.get('e_PassWord')?.validator({} as AbstractControl);
    // console.log(Object.keys(validator).length);

    if(controls.get('e_Id').value)
    {
        // controls.get('e_PassWord').clearValidators();
        // controls.get('e_PassWord').updateValueAndValidity();
        // controls.get('e_ConfirmPassword').clearValidators();
        // controls.get('e_ConfirmPassword').updateValueAndValidity();
        return null;
    }

    const password = controls.get('e_PassWord').value;    
    const confirmPassword = controls.get('e_ConfirmPassword').value;
    return (password && confirmPassword) && (password === confirmPassword) ? null : {passWordMatch: true};
}
