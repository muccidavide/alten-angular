import { Component } from '@angular/core';
import { User } from '../../models/user'
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass']
})
export class UserListComponent {
  public userList: Array<User> = [{ id: 1, username: "davide", email: 'd@email.com' },
  { id: 2, username: "luca", email: 'l@email.com' },
  { id: 3, username: "anna", email: 'a@email.com' }
  ];

  handleDelete(user: User): void {
    console.log("PRE", this.userList.length);
    
    this.userList = this.userList.filter(x => x != user);
    console.log("POST", this.userList.length);
  }
}
