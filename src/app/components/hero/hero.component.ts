import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

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

  constructor(
  ) { }

  ngOnInit() {
  }

}
