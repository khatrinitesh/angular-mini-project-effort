import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  Name:string='nitesh';
  Branch:string='Front-end developer';
  Mobile:number=9920767524;
  Gender:string ='Male';
  Age:number=33;

  constructor() { }

  ngOnInit() {
  }

}
