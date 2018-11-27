import { AbstractControl } from '@angular/forms';
export function nameValidator(control: AbstractControl) {
  if (control.value.indexOf('Ruby') >= 0) {
    return null;
  } else {
    return { nameValidator: true };
  }
}
