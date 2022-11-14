import { Component, OnInit } from '@angular/core';
import FruitData from '../../../assets/json_data/fruit_data.json';
import { Router } from '@angular/router';

// interface fruit{
//   name:string,
//   price:number,
//   quantity:number,
//   selected:boolean
// }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public showLoginReg: boolean = false
  public childTitle: string = 'Child title';
  public clickCount: number = 0;
  public myExampleTest: string = 'nitesh khatri is example'
  public receivedTestChild: string = ''
  // public FruitData=FruitData

  public all  = [
    {
      id:1,
      name:'d1',
      checked: false
    },
    {
      id:2,
      name:'d2',
      checked: false
    },
    {
      id:3,
      name:'d3',
      checked: false
    },
    {
      id:4,
      name:'d4',  
      checked: false
    },
    {
      id:5,
      name:'d5',
      checked: false
    },
  ];
  public selected = [];

  

  selectedfruit: any=""

  constructor(private router: Router) {
    // console.log(this.fruit);
  }

  add(){
    var t = this.all.filter(obj => obj.checked).map(obj => obj)
    this.selected = t;
    // this.router.navigate(['/about']);  // define your component where you want to go
  }

  fruit: FruitData[] = FruitData.fruit;

  selectedobj(event){
    // console.log(event);
    this.selectedfruit= event;
    this.fruit = this.fruit.map(obj=>obj.name == event ? {...obj, selected :true}: {...obj ,selected :false});
    console.log(this.fruit);
    // let selectedfruit=this.fruit.filter(obj=>obj.name == event)[0];
    // console.log(selectedfruit);
    // this.fruit = this.fruit.map((obj, i) => ({ ...obj, selected : false }));
    // this.fruit["name"] == event ? this.fruit[event].selected = true: this.fruit[event].selected= false;
    // var objIndex = this.fruit.findIndex((obj => obj.name == event));
    // this.fruit[objIndex].selected = true;
    // this.fruit= [...this.fruit, this.fruit[event].selected= true]
  }
  buttonExample(msg: any) {
    this.receivedTestChild = msg
  }


  // ARRAY DATA FOR FRUITS
  // public fruits = [
  //   { name: 'MangoPineapple', price: '100', quantity: '2' },
  //   { name: 'Grapes', price: '900', quantity: '5' },
  //   { name: 'Melons', price: '220', quantity: '3' },
  //   { name: 'Dekopon', price: '1400', quantity: '4' },
  //   { name: 'Apple', price: '800', quantity: '6' }
  // ]


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

