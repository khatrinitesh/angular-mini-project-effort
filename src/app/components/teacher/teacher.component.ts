import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {

  // input
  @Input() userName:string;
  @Output() getResponse = new EventEmitter;  
  @Input() users
  // output
  @Output() removeUser = new EventEmitter();
  @Output() addUserEvent = new EventEmitter();

  newUserName:string ='';

  setNewUserName(username:string){
    this.newUserName = username;
  }

  addUser():void{
    this.addUserEvent.emit(this.newUserName) 
    this.newUserName = ''
  }
  

  constructor() { }


  principle = 'Principle'

  ngOnInit() {
  }

  onClick(){
    this.getResponse.emit('message from child')
  }

}
