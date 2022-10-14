import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public showLoginReg: boolean = false
  public childTitle: string = 'Child title';
  public clickCount: number = 0;

  constructor() {
  }


  // ARRAY DATA FOR FRUITS
  public fruits = [
    { name: 'MangoPineapple', price: '100', quantity: '2' },
    { name: 'Grapes', price: '900', quantity: '5' },
    { name: 'Melons', price: '220', quantity: '3' },
    { name: 'Dekopon', price: '1400', quantity: '4' },
    { name: 'Apple', price: '800', quantity: '6' }
  ]


  onCountChanged() {
    this.clickCount++
  }

  btnLog() {
    this.showLoginReg = true
  }

  btnReg() {
    this.showLoginReg = false
  }


  ngOnInit() {
  }
}

