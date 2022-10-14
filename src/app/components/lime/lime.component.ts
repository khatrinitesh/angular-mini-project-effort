import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-lime',
  templateUrl: './lime.component.html',
  styleUrls: ['./lime.component.scss']
})
export class LimeComponent implements OnInit {
  // INPUT
  @Input() receivedParentMessage: string;
  @Input() StepMsg: string = '';
  @Input() dynamicdata: string | undefined;
  @Input() staticdata: string | undefined;
  public msgToSendC: string = 'Hello parent';
  public msgToSendC1: string = 'Hello Awesome'
  @Input() item: string;
  // OUTPUT
  @Output() msgToEmit = new EventEmitter();
  @Output() buttonSend = new EventEmitter();

  sendMsgToParent(msg: string) {
    this.msgToEmit.emit(msg);
  }

  btnSend(data: string) {
    this.buttonSend.emit(data)
  }



  constructor() { }

  ngOnInit() {
  }

}
