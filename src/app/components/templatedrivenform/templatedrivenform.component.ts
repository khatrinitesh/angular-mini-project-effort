import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { addressModel } from '../address/address.component';

@Component({
  selector: 'app-templatedrivenform',
  templateUrl: './templatedrivenform.component.html',
  styleUrls: ['./templatedrivenform.component.scss']
})
export class TemplatedrivenformComponent implements OnInit {

  model: addressModel = {
    email: '',
    phone: ''
  }

  onFormSubmit() {
    console.log('Full address', this.model)
  }

  constructor() { }

  ngOnInit() {
  }

}
