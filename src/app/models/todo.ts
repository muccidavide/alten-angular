import { ITodo } from "../interfaces/todo.interface";

// è meglio non implementare l'interfaccia nei modelli perchè
// come in questo caso, se vogliamo cambiare i nomi della proprietà restituite
// qui 'completed' -> 'isCompleted'
export class Todo /* implements ITodo */{
    constructor(public id:number, public userId:number, public title: string, public isCompleted:boolean){

    }
}