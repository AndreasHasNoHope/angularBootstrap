import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public task: string = "";
  public list: string[] = [
    "learn Css",
    "learn Js",
    "learn Html",
    "learn Angular",
    "learn C++",
    "learn Bootstrap",
    "learn C",
    "learn Java",
    "learn Express Framework",
    "learn how to kill"
  ];


  constructor() { }
  ngOnInit() {}

  public addToList(){
    if (this.task && !this.list.includes(this.task) ){
      this.list.push(this.task);
      this.task= "";
    }
  }
  public removeFromList(x){
    this.list.splice(x,1);
  }
  public deleteAll(){
    this.list = [];
  }
}
