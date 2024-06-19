// Core
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Modules
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserListRowComponent } from './components/user-list-row/user-list-row.component';

// Directive
import { ForbiddenValidatorDirective } from './directives/forbidden-validator.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { RangeValidatorDirective } from './directives/range-validator.directive';
import { UserService } from './services/user.service';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { UserInfoComponent } from './components/user-info/user-info.component';

//Services


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ForbiddenValidatorDirective, 
    RegistrationFormComponent, 
    RangeValidatorDirective,
    ReactiveFormComponent, 
    HighlightDirective, 
    UserListComponent,
    UserListRowComponent,
    TodoListComponent,
    NotFoundComponent,
    HomeComponent,
    UserInfoComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule, 
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: UserService, 
      useClass: UserService, 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
