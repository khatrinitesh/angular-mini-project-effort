import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.scss']
})
export class AppleComponent implements OnInit {
  @Input() description: string;
  @Input() childMsg: string;
  @Input() msgComponent: string;

  @Output() childButtonEvent = new EventEmitter();
  @Output() onInitEvent = new EventEmitter();
  @Output() childBtnEventTxt = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.onInitEvent.emit('This message is appeared automatically as the child component will intialized. This message is defined in the child component ngOninit method');
  }

  clickHandler() {
    this.childButtonEvent.emit('This message is appearing here because user has clicked the button which is available in child component');
  }

  clickHandlerTwo() {
    this.childBtnEventTxt.emit('nitesh khatri');
  }





}
