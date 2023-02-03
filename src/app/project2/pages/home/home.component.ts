import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public date= new Date();
  public lastName:string= 'khatri';
  public Value:number=500;
  public birthday:string='17th-June-1989'
  public datePipeString : string;
  public customDate = this.date;
  public chosenObj:any;
  public imageHeight: number = 200;
  public imageWidth: number = 200;
  public color:any;
  public image =
  'https://www.rollingstone.com/wp-content/uploads/2020/01/eminem-review.jpg?resize=120,120&w=120';
  public Data: DataObj[] = [
    { id: 'one', name: 'Food' },
    { id: 'two', name: 'Travel' },
    { id: 'three', name: 'Education' },
    { id: 'four', name: 'Goverment' },
  ];
  
  constructor() { 
  }

  ngOnInit() {
  }

}


interface DataObj{
  id:string;
  name:string;
}