import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IUser } from '../interfaces/user.interface';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  public list(): Observable<User[]>{
    return this._http.get<IUser[]>('https://jsonplaceholder.typicode.com/users').pipe(
      map(this.objsToModels));
  }

  public getUserById(id: number): Observable<User>{
    return this._http.get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`).pipe(
      map(this.objToModel))
  }

  public objToModel = (user:IUser): User => new User(user.id, user.email, user.username)   

  public objsToModels = (users:IUser[]): User[] => users.map(this.objToModel);

   
}

