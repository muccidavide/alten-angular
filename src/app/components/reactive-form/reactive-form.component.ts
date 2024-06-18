import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NumberValidators } from 'src/app/validators/number.validators';
import { StringValidators } from 'src/app/validators/string.validators';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.sass']
})
export class ReactiveFormComponent {

  public form : FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required, Validators.minLength(5)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    age: new FormControl(18, [Validators.required, NumberValidators.range(18,100)]),
    policy: new FormControl(false, Validators.requiredTrue)
  })

  public isSubmitted: boolean = false;

  public handleSubmit(): void{
    this.isSubmitted = true;
  }

  constructor(){

  }

  get email(): FormControl{
    return this.form.get('email') as FormControl;
  }

  get username(): FormControl{
    return this.form.get('username') as FormControl;
  }

  get password(): FormControl{
    return this.form.get('password') as FormControl;
  }

  get age(): FormControl{
    return this.form.get('age') as FormControl;
  }

  get policy(): FormControl{
    return this.form.get('policy') as FormControl;
  }
}
