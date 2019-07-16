import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  colors=["red","yellow","green"];

  details:any=[
    {name:"amit",state:"UP"},
    {name:"kul",state:"MP"},
    {name:"sumit",state:"Delhi"},
  ];
  constructor() { 
    console.log(this.colors);
  }

  ngOnInit() {

  }

  GetUserDetails(name:string,address:string)
  { 
     console.log(name);
     console.log(address);
  }
  getColor(color:String)
  {
    console.log(color);
  }
}
