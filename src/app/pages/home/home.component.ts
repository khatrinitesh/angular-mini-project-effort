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
  public FruitData:any

  

  emailFormArray: Array<any> = [];
  categories = [ 
    {name :"email1", id: 1},
    {name :"email2", id: 2},
    {name :"email3", id: 3},
    {name :"email4", id: 4}
  ];
  childData: string[];

  onChange(email:string, isChecked: boolean) {
    if(isChecked) {
      this.emailFormArray.push(email);
    } else {
      let index = this.emailFormArray.indexOf(email);
      this.emailFormArray.splice(index,1);
    }
}

// selectAll() {
//   let checkBoxes = document.querySelectorAll('.form-check-input');
//   checkBoxes.forEach(ele => ele.click());
// }
 
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
  public selected:any= [];
  checked:boolean
  selectedfruit: any

  constructor(private router: Router) {
    this.selected = this.router.getCurrentNavigation().extras.state? this.router.getCurrentNavigation().extras.state.selected: [];
    console.log("all",this.all);
    console.log("selected",this.selected); 
    // console.log(this.fruit);
  }
  
  // changecheckbox(event){
  //   console.log(event);
  // }

  public myArray = [
    {property1: "a", property2:"b"},
    {property1: "c", property2:"d"},
    {property1: "e", property2:"f"},
 ]

 public title = 'BindingUp';

 public favBooks = [
  { title: 'Principles' },
  { title: 'The Story of Success' },
  { title: 'Extreme Economies' },
];

 public selectedValue: string 
 public selectedObject: any

 onBookAdded(eventData:{title:string}){
  this.favBooks = this.favBooks.concat({
    title:eventData.title,
  })
 }
 
  add(){
    // var t = this.all.filter(obj => obj.checked).map(obj => obj.id)
    var t = this.all.filter(obj => obj.checked).map(obj => obj)
    this.selected = t;
    console.log(this.selected)
    this.router.navigate(['/about'],{state:{selected:this.selected}});  // define your component where you want to go
  }

  eventHandler(event:string[]){
    this.childData = event;
  }

  fruit: FruitData = FruitData.fruit[0];

  selectedobj(event){
    // console.log(event);
    this.selectedfruit = event;
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
    this.checked = true;
    this.selectedValue = this.myArray[0].property1
    this.onValueChange();
  }

  onValueChange() {
    const found = this.myArray.filter( obj => obj.property1 === this.selectedValue)
    this.selectedObject = found? found[0] : {}
  }
}

