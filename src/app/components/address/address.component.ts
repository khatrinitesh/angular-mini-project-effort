import { Component, EventEmitter, OnInit, Output } from '@angular/core';

export interface addressModel {
  email: string,
  phone: string
}

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  @Output() nameEvent = new EventEmitter<string>();
  @Output() phoneEvent = new EventEmitter<string>();

  userName: string = '';
  userPhone: string = '';

  onNameChange() {
    this.nameEvent.emit(this.userName);
  }

  onPhoneChange() {
    this.phoneEvent.emit(this.userPhone);
  }

  constructor() { }

  ngOnInit() {
  }

}
