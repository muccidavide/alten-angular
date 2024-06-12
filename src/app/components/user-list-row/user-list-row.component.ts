import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: '[app-user-list-row]',
  templateUrl: './user-list-row.component.html',
  styleUrls: ['./user-list-row.component.sass']
})
export class UserListRowComponent implements OnDestroy{
  // con ! si puo valorizzare user dopo l'inizializzazione del componente
  @Input() user!: User;
  @Output() deleteUser : EventEmitter<User> = new EventEmitter();

  ngOnDestroy(): void {
      console.log("on destroy");
      
  }
  public handleDelete(): void{
    this.deleteUser.emit(this.user);
  }
}
