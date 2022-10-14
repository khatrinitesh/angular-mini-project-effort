import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
