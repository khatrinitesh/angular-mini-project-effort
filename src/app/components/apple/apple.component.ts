import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.scss']
})
export class AppleComponent implements OnInit {
  @Input() description: string;

  constructor() { }

  ngOnInit() {
  }

}
