import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-name-display',
  templateUrl: './name-display.component.html',
  styleUrls: ['./name-display.component.css']
})
export class NameDisplayComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData() }
   
    
  fetchData=()=>{
    this.myapi.viewName().subscribe(
      (data:any)=>{
        this.name =data;
      }
    )
    
  }
  name=""
  


  ngOnInit(): void {
  }

}
