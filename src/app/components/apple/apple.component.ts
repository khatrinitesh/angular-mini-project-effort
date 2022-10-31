import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.scss']
})
export class AppleComponent implements OnInit {
  @Input() description: string;
  @Input() childMsg: string;

  @Output() childButtonEvent = new EventEmitter();
  @Output() onInitEvent = new EventEmitter();
  @Output() childBtnEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.onInitEvent.emit('This meesage is appeared automatically as the child component will intialized. This message is defined in the child component ngOninit method');
  }

  clickHandler() {
    this.childButtonEvent.emit('This message is appearing here because user has clicked the button which is available in child component');
  }

  clickHandlerTwo() {
    this.childBtnEvent.emit('nitesh khatri')
  }





}
