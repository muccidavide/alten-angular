import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserListRowComponent } from './components/user-list-row/user-list-row.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    UserListComponent,
    UserListRowComponent,
    RegistrationFormComponent, 
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
