import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.sass']
})
export class RegistrationFormComponent {
  public username: string = '';
  public email: string = '';
  public password: string = '';
  public age!: number;
  public policy: boolean = false;

  public handleSubmit(form: NgForm): void {

    if (form.invalid) {
      console.log('invalid form');
      return;
    }

    console.log("sumbit");

  }

}
