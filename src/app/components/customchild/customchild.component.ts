import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-customchild',
  templateUrl: './customchild.component.html',
  styleUrls: ['./customchild.component.scss']
})
export class CustomchildComponent implements OnInit {

  @Input() childMessage:string;
  @Output() messageEvent = new EventEmitter<string>();
  @Input() jsonData;
  @Output() outputData = new EventEmitter();

  constructor(private activatedrouter:ActivatedRoute) { 
    this.activatedrouter.queryParams.subscribe(data => {
      console.log(data)
    })
  }

  message:string = 'Hello Angular!';

  sendMessage(){
    this.messageEvent.emit(this.message);
  }

  


  ngOnInit() {
    console.log(this.jsonData);
  }

}
