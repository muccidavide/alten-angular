import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-user-todo',
  templateUrl: './user-todo.component.html',
  styleUrls: ['./user-todo.component.sass']
})
export class UserTodoComponent implements OnInit{
  public todos:Todo[] = [];
  constructor(private _todoService: TodoService, private _route: ActivatedRoute){}
  
  ngOnInit(): void {
    this._route.paramMap.pipe(
      switchMap(params => this._todoService.getTodosByUser(+(params.get('id') as string))))
      .subscribe(todos => this.todos = todos)
  }

}
