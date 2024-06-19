import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.sass']
})
export class UserInfoComponent implements OnInit {
  public user!: User;
  
  constructor(private _userService: UserService, private _route: ActivatedRoute){}

  
  ngOnInit(): void {
    this._route.paramMap.pipe(
      switchMap(params => this._userService.getUserById(+(params.get('id')as string)))).subscribe(
        user => this.user = user
      )
  }
}
