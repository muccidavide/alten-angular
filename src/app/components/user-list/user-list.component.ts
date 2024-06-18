import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass']
})
export class UserListComponent implements OnInit , OnDestroy {
/*   public userList: Array<User> = [{ id: 1, username: "davide", email: 'd@email.com' },
  { id: 2, username: "luca", email: 'l@email.com' },
  { id: 3, username: "anna", email: 'a@email.com' }
  ]; */

  public userList: Array<User> = []; 
  private _subscription!: Subscription;

  constructor(private _userService: UserService){

  }

  handleDelete(user: User): void {
    this.userList.splice(this.userList.indexOf(user), 1);
  }

  ngOnInit(): void {
      this._subscription = this._userService.list().subscribe(users => this.userList = users)
  }

  ngOnDestroy(): void {
    // serve a liberare memoria una volta finita l'osservazione dell'observable
      this._subscription.unsubscribe();
  }
}
