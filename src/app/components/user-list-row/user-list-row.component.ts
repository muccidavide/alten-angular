import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-list-row',
  templateUrl: './user-list-row.component.html',
  styleUrls: ['./user-list-row.component.sass']
})
export class UserListRowComponent {
  @Input() user: User = new User(1, '2', '3');
  @Output() deleteUser : EventEmitter<User> = new EventEmitter();

  public handleDelete(): void{
    this.deleteUser.emit(this.user);
  }
}
