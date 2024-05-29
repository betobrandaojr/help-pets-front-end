import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function equalsRequired<V>(equalsControl: () => V): ValidatorFn {
  return (control: AbstractControl): ValidationErrors => {
    return control.value !== equalsControl() ? { equalsRequired: true } : null;
  };
}
