import { AbstractControl, ValidatorFn } from '@angular/forms';

export function CheckConfirmPassword(): ValidatorFn {
  return (control: AbstractControl): Record<string, any> | null => {
    return control.value.passwordNew !== control.value.password
      ? {
          checkPassword: 'MESSAGE.CONFIRM_PASSWORD',
        }
      : null;
  };
}
