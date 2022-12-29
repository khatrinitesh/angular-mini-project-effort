import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  htmlStr: string = `Plain Text Example &amp; <strong>Bold Text Example</strong>`;
  onlineStatusReport='Online'
  offlineStatusReport='Offline'
  numberA:number=1;
  numberB:number=2;
  @Input() public foreground = 'black'
  @Input() public background = 'orange'
  lastName:string=null;
  firstName:string='nitesh'
  public condition:boolean=true

  btnToggle(){
    this.condition = !this.condition
  }

  getFullName():string  
  {  
   return this.firstName + " " + this.lastName;  
  }

  constructor() { }

  ngOnInit() {
  }

  getOnlineStatusColor(){
    return 'red';
  }

  getOfflineStatusColor(){
    return 'green';
  }

  addTwoNumbers(){
    this.numberA + this.numberA
    console.log(this.numberA + this.numberB)
  }


  example:any;
  

}
