import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function titleRangeValidator(): ValidatorFn {
  return (control: AbstractControl<number>): ValidationErrors | null => {
    const inRange = control.value >=0 && control.value <= 50;
    return inRange ? null : { outOfRange: true };
  };
}
