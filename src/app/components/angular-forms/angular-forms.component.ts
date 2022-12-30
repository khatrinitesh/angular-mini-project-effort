import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-forms',
  templateUrl: './angular-forms.component.html',
  styleUrls: ['./angular-forms.component.scss']
})
export class AngularFormsComponent implements OnInit {

  constructor(
    public id:number,
    public name:string,
    public power:string,
    public alterEgo?:string) { 
    
  }

  

  ngOnInit() {
  }

}
