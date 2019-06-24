import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodosComponent} from './components/todos/todos.component'
import {HeatmapComponent} from './components/heatmap/heatmap.component'
const routes: Routes = [

{
  path:"",
  component:TodosComponent
},
{
  path:"heatmap",
  component:HeatmapComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
