import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { StringValidators } from '../validators/string.validators';

@Directive({
  providers:
    [
      {
        multi: true,
        provide: NG_VALIDATORS,
        useExisting: ForbiddenValidatorDirective
      }
    ]
  ,
  selector: '[appForbiddenValidator]'
})
export class ForbiddenValidatorDirective implements Validator {

  @Input('appForbiddenValidator') public values!: string | string[];
  constructor() { }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const args = typeof this.values === 'string' ? [this.values] : this.values;

    /*     const internalFunc = StringValidators.forbidden(...this.values);
        return internalFunc(control); */

    return StringValidators.forbidden(...this.values)(control);
  }

}
