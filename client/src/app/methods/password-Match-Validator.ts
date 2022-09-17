import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const passwordMatchValidator: ValidatorFn = (controls: AbstractControl): ValidationErrors | null => {
    const password = controls.get('e_PassWord')?.value;    
    const confirmPassword = controls.get('e_ConfirmPassword')?.value;
    return (password && confirmPassword) && (password === confirmPassword) ? null :  {passWordMatch: true};
}
