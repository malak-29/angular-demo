import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  Todolist = [
         
    ];  
  constructor() { }

  getTodos(){
    return this.Todolist;
  }
  deleteTodo(title:string){
    console.log(title);
    const obj = this.Todolist.findIndex(Todolist => Todolist.title === title);
    console.log(this.Todolist[obj]);
    this.Todolist.splice(obj,1);
  }
  addTodo(TodoItem){
    this.Todolist.push(TodoItem);
  }
}
