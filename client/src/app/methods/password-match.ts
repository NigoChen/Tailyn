import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const PasswordMatch: ValidatorFn = (controls: AbstractControl): ValidationErrors | null => {
    const password = controls.get('e_PassWord')?.value;
    const confirmPassword = controls.get('e_ConfirmPassword')?.value;
    return password && confirmPassword && (password === confirmPassword) ? null : {passwordMatch: true};
}
