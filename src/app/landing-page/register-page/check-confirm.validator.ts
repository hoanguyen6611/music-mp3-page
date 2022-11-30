import { AbstractControl, ValidatorFn } from '@angular/forms';

export function CheckConfirmPassword(): ValidatorFn {
  return (control: AbstractControl): Record<string, any> | null => {
    return control.value.password !== control.value.confirmpassword
      ? {
          checkPassword: 'MESSAGE.CONFIRM_PASSWORD',
        }
      : null;
  };
}
