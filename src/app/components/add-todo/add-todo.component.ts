import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../services/todo.service'

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  title:string;

  constructor(private todoService:TodoService) { }
  
  ngOnInit() {
  }
  onSubmit(){
    console.log("submit");
    
    const todo = {
        title:this.title,
        completed:false
    }
    if(this.title){
      this.todoService.addTodo(todo);
    }
    this.title='';
  }
}
