import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITodo } from '../interfaces/todo.interface';
import { Observable, map } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private _http: HttpClient) { }

  public list(): Observable<Todo[]>{
    return this._http.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos').pipe(
      map(td => td.map(td => new Todo(td.id, td.userId, td.title, td.completed)))
    )
  }

  public getTodosByUser(id:number): Observable<Todo[]>{
    return this._http.get<ITodo[]>(`https://jsonplaceholder.typicode.com/users/${id}/todos`).pipe(
      map(td => td.map(td => new Todo(td.id, td.userId, td.title, td.completed)))
    );
  }
}
