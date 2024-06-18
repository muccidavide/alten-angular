import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { NumberValidators } from '../validators/number.validators';
import { IRangeValidator } from '../interfaces/range-validator.interface';

@Directive({
  providers:
    [
      { multi: true,
        provide: NG_VALIDATORS,
        useExisting: RangeValidatorDirective
      } 

    ]
  ,
  selector: '[appRangeValidator]'
})
export class RangeValidatorDirective implements Validator{

  @Input('appRangeValidator') values!: IRangeValidator;
  constructor() { }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    
    return NumberValidators.range(this.values.min, this.values.max)(control);
  }
  

}
