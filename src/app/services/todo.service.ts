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
      map(td => td.map(this.objToModel))
    )
  }

  public getTodosByUser(id:number): Observable<Todo[]>{
    return this._http.get<ITodo[]>(`https://jsonplaceholder.typicode.com/users/${id}/todos`).pipe(
      map(td => td.map(this.objToModel))
    );
  }

  public objToModel = (todo:ITodo) : Todo => new Todo(todo.id, todo.userId, todo.title, todo.completed);
  
/*
     public x = (todos:ITodo[]) : Todo[] => 
    todos.map(todo => this.objToModel(todo));
*/
  // Semplificata => 
  public objsToModels = (todos:ITodo[]) : Todo[] => 
    todos.map(this.objToModel);
}
