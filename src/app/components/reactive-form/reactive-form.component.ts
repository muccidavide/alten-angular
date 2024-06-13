import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.sass']
})
export class ReactiveFormComponent {
  public form : FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.min(8)])
    
    
  });

  public isSubmitted: boolean = false;

  public handleSubmit(): void{
    this.isSubmitted = true;

    
  }

  constructor(){

  }

  get email(): FormControl{
    return this.form.get('email') as FormControl;
  }
}
