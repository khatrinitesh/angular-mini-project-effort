import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroform',
  templateUrl: './heroform.component.html',
  styleUrls: ['./heroform.component.scss']
})
export class HeroformComponent implements OnInit {

  submitted: boolean = false

  onSubmit() {
    this.submitted = true;
  }

  // get diagnostic() {
  //   return JSON.stringify(this.model)
  // }

  constructor() { }

  ngOnInit() {
  }

}
