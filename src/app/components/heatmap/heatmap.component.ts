/// <reference types="@types/googlemaps" />
import { Component, AfterViewInit , ViewChild  } from '@angular/core';
import {MapService} from '../../services/map.service'

@Component({
  selector: 'app-heatmap',
  templateUrl: './heatmap.component.html',
  styleUrls: ['./heatmap.component.css']
})
export class HeatmapComponent implements AfterViewInit  {
 
  constructor(private mapService:MapService) {
    
      
  }
  ngAfterViewInit () {
    setTimeout(()=>{ 
      this.mapService.initMap(); 
    }, 500);
    
  }
  toggleHeatmap(){
    console.log(1);
    this.mapService.toggleHeatmap(); 
  }
  changeGradient(){
    console.log(2);
    this.mapService.changeGradient();
  }
  changeRadius(){
    console.log(3);
    this.mapService.changeRadius();
  }
  changeOpacity(){
    console.log(4);
    this.mapService.changeOpacity();
  }
}
