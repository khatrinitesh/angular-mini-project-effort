import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  isuserSuperAdmin: boolean;





  constructor() { }



  ngOnInit() {
  }

}
