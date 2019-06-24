import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'demoapp';

  constructor(){
    this.changeName('Wassup');
  }
  changeName(name:string):void{
    this.title=name;
  }
}
