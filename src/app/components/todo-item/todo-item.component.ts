import { Component, OnInit,Input } from '@angular/core';
import {Todo} from 'src/app/models/Todo';
import {TodoService} from '../../services/todo.service'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo:Todo;
  constructor(private todoService:TodoService) { }

  ngOnInit() {
  }

  setClasses(){
    let classes = {
      todo:true,
      'is-complete':this.todo.completed
    }
    return classes
  }
  onToggle(todo){
    console.log('toggle');
    todo.completed = !todo.completed;    
  }
  onDelete(todo){
    console.log('delete');
    this.todoService.deleteTodo(todo.title);
  }
}
