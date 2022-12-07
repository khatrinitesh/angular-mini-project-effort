import { Component, Input, OnInit, Output,EventEmitter,ViewChild, TemplateRef, ElementRef, ViewChildren } from '@angular/core';
import FruitData from '../../../assets/json_data/fruit_data.json';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactComponent } from '../contact/contact.component';


interface Movie {
  title:string;
  director:string;
}


// interface fruit{
//   name:string,
//   price:number,
//   quantity:number,
//   selected:boolean
// }

interface Transport {
  name:string;
  val:number;
}


interface persongroup{
    id:number;
    name: string;
    address:string;
    contactNo:string;
    gender: string;
    // website: string;
    // desc: string;
}

interface itemsgroup{
  name:string;
  id:number;
}

interface category {
  id:number;
  name:string;
}//this acts like datatype/class


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public txtname = 'Edward Christopher Sheeran';
  
  public musicians = ['Ed Sheeran', 'Prince Indah', 'Emma Jalamo']
  public name:string | undefined;

  addArtists(newMusician:any){
    this.name = newMusician;
    this.musicians.push(newMusician);
  }

  btnMusic(id){
    this.musicians.splice(id,1)
  }
  
num=-1
  isRed(num) {
    if (num > 10) {
        return false;
    } else {
        return true;
    }
      }

      users = [
        {
          id:1,
          name:'a',
          age:33,
        },
        {
          id:2,
          name:'b',
          age:40,
        },
        {
          id:3,
          name:'c',
          age:43,
        },
      ]

      delBtnList(id){
        this.users.splice(id,1)
      }


      public name = ['nitesh','vishal','mayur','sonal']

  multiSelection = {
    color:'blue',
    textDecoration:'underline'
  }

  color='red'
  

  public ApplyBoldClass: boolean = true;
  success ='success';
  error ='danger';
  underLine = 'underline';
  bold='bold';
  hasError = false;
  multiclass:string = 'success underline bold'
  conditionMultiClass = {
    'success':!this.hasError,
    'error':this.hasError
  }

 
  getData(){
    return 'nitesh khatri is pass value from TS to HTML'
  }  

  YTname=''
  number1 = 1;
  number2 = 2;
  sum=0;

  calc(num1:any,num2:any){
    this.sum = parseFloat(num1)+ parseFloat(num2)
  }

  valueParent = 'this is parent data';
  // datatwo = {
  //   name:'ashish',
  //   channel:"ashish vlogs"
  // }

  getValue(val:any){
    this.YTname = val;
    console.warn(val)
  }

  public foo = {
    regionList: [
      {
        id: 1,
        country: 'England',
        value: 'England',
        isClosed: 'false',
        checked: false,
        Activities: [
          {
            id: 12,
            value: 'Soccer',
            checked: false,
          },
          {
            id: 267,
            value: 'baseball',
            checked: false,
          },
        ],
      },
      {
        id: 2,
        country: 'Aus',
        value: 'Aus',
        isClosed: 'false',
        checked: false,
        Activities: [
          {
            id: 48,
            value: 'Cricket',
            checked: false,
          },
          {
            id: 251,
            value: 'volleyball',
            checked: false,
          },
          {
            id: 207,
            value: 'Golf',
            checked: false,
          },
        ],
      },
    ],
  };

  public exampleIf:boolean=true;

  public selectedValueOne = 'One'
  activeidx:number;
  i='https://via.placeholder.com/150'
  regionList: any;

  addStyle(i){
    this.activeidx=i;
  }

  btnSave($event){
  console.log('this message is good',$event)
  }



  public trans:Transport[] = [
    {
      name:'nitesh',
      val:0
    },
    {
      name:'sameet',
      val:1
    },
    {
      name:'urvashi',
      val:2
    },
    {
      name:'arvind',
      val:3
    },
  ]

  public items1:any[]=[
    {
      name:'nitesh'
    },
    {
      name:'nitesh2'
    },
    {
      name:'nitesh3'
    },
    {
      name:'nitesh4'
    },
    {
      name:'nitesh5'
    },
  ]


  model:any;
  @ViewChild('cardTemplate',null) cardTemplate:TemplateRef<HTMLElement>;
  @ViewChild('listTemplate',null) listTemplate:TemplateRef<HTMLElement>;
  @ViewChild('headline',null)
  headline:ElementRef;

  favoriteColorControl = 'blue'

  @ViewChild('ContactComponent',null)
  contentProject:ContactComponent

  @ViewChildren('headline')

  // public isuserSuperAdmin:boolean;
  public isDisabled:boolean=false;

  btnDisabled(){
    this.isDisabled = true;
  }

  allowNewServer:boolean=false;
  serverCreationStatus = 'no server is created';

  ngAfterViewInit():void{
    // this.contentProject.isuserSuperAdmin = true;
    console.log(this.headline.nativeElement.innerHTML)
  }

  userForm: FormGroup;

  onCreateServer(){
    this.allowNewServer
  }

  public categories:category[] = [
    {id: 1, name: 'JQuery'},
    {id: 2, name: 'Angular'},
    {id: 3, name: 'Vue'},
    {id: 4, name: 'React'}
  ]


  public subtitle :string='nitesh khatri'
  public todaydate = new Date();
  public jsonval = {name: 'Alex', age: '25', address:{a1: 'Paris', a2: 'France'}};
  public months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun',  
  'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];  
  selectedObject:category;

  mode = 'card'

  enteredValue ='';

  // START, DATE: 24112022, TITLE:Angular 13: Actual use of ng-container
  public letSomeData :any[]= [
    {
      id:1, title:'nitesh',location:'mumbai'
    },
    {
      id:2, title:'urvashi',location:'mumbai'
    },
    {
      id:3, title:'arvind',location:'mumbai'
    },
    {
      id:4, title:'sameet',location:'usa'
    },
    {
      id:5, title:'nitesh',location:'usa'
    },
  ]
  // END, DATE: 24112022, TITLE:Angular 13: Actual use of ng-container

  // START, DATE:24112022, TITLE: <!-- START, DATE:24112022, TITLE:Angular Nested loops | ngFor and ngIf together | ng-container for ngif & ngfor | Error handling -->
  public complexArr = [
    {
      id:1,
      name:'sai',
      phoneNum:['12345','12345']
    },
    {
      id:2,
      name:'rahul',
      phoneNum:['23331','23332']
    },
    {
      id:3,
      name:'sachin',
      phoneNum:['333','33344']
    },
    {
      id:4,
      name:'vikram',
      phoneNum:['55511','555588522']
    },
  ]
  // END, DATE:24112022, TITLE: <!-- START, DATE:24112022, TITLE:Angular Nested loops | ngFor and ngIf together | ng-container for ngif & ngfor | Error handling -->

  items = [ 
    {
      header: 'Angular Tutorial',
      content: 'The Angular Tutorial for Beginners & Professionals'
    },
    {
      header: 'Typescript Tutorial',
      content: 'The Complete Guide to Typescript'
    },
    {
      header: 'Entity Framework Code Tutorial',
      content: 'Learn Everything about Entity Framework Core'
    },
  ]

  inputTxt:string = '';

  modeOptions = [
    { mode: "card" },
    { mode: "list" },
  ]
  

  get template(){
    if(this.mode == 'list') 
    return this.listTemplate;
    return this.cardTemplate;
  }
  

  public ItemArray:itemsgroup[]=[
    {
      name: 'Lutz',
      id: 0
    },
    {
      name: 'Corey',
      id: 1
    },
    {
      name: 'Angular',
      id: 5
    }
  ]
  searchText; // filter search inside table data

  addItemTable() {
    console.log(this.userForm.value);
    this.persons.push({"id":this.persons.length+1,...this.userForm.value});
    // this.userForm.reset();
  }

  resetForm(){
    this.userForm.reset();
  }


  // btnEditTable(pid){
  //   console.log(pid)
  //   this.isEditItems = !this.isEditItems;
  // }
  btnRemoveTable(id){
    console.log(this.persons)
    var delBtn = confirm(" Do you want to delete ?");
    if(delBtn == true){
      this.persons = this.persons.filter((data) => data.id != id)
    }
    
  }

  btnRemoveArray(id){
    // this.regionList.splice(i,1)
    // this.foo.regionList[i].Activities.splice(,1)
    // this.foo.regionList.splice(i,1)
    this.foo.regionList.filter((rl, index) => rl !== id);
  }
  // btnRemove(id){
  //   console.log(this.ItemArray)
  //   this.ItemArray = this.ItemArray.filter((data) => data.id != id)
    
  // }

  public x = 50
  public y = 10

  
  currentURL = window.location.href;
  public showLoginReg: boolean = false
  public childTitle: string = 'Child title';
  public clickCount: number = 0;
  public myExampleTest: string = 'nitesh khatri is example'
  public receivedTestChild: string = ''
  public FruitData:any
  // @Input() options2:string[];
  @Output() selectionChanged = new EventEmitter<string>();

  selectOption(example:string){
    this.selectionChanged.emit(example)
  }


  public options2 = [
    "Great White","Great hammerhead","Angular roughshark","Pyjama"
  ]
  

  emailFormArray: Array<any> = [];
  // public categories:category[] = [ 
  //   {name :"email1", id: 1},
  //   {name :"email2", id: 2},
  //   {name :"email3", id: 3},
  //   {name :"email4", id: 4}
  // ];
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

  public numbers:Array<any> = [1,2,3,4,5,6,7,8,9]
  public serverID:number =10;
  public serverStatus:string ='Offline';
  public adminRole:boolean=true;
  public ifRoleIsDefined:boolean=true;
  public Content:boolean = false;

  @Input() count: number = 0;
  @Output() countChange: EventEmitter<number> = new EventEmitter<number>();

  increment() {
    this.count++;
    this.countChange.emit(this.count)
  }

  constructor(private router: Router,private fb: FormBuilder) {
    this.selected = this.router.getCurrentNavigation().extras.state ? this.router.getCurrentNavigation().extras.state.selected: [];
    //  .log(this.router.getCurrentNavigation().extras.state.selected); // should log out 'bar'
    

    // setTimeout(() => {
    //   this.allowNewServer=true;
    // },5000);
    // START DATE: 24112022, TITLE: Style elements dynamically with ngStyle
    this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
    // END DATE: 24112022, TITLE: Style elements dynamically with ngStyle
    
    // console.log("all",this.all);
    // console.log("selected",this.selected); 
    // console.log(this.all.map(obj=>obj.id== this.selected.map(obj=>obj.checked == true).id))
    // console.log(this.fruit);
    // for (let itm=0;itm<this.all.length;itm++){
    //   var names =this.selected.map(obj=>obj.id)
    //   if(names.includes(this.all[itm].id)){
    //     this.all[itm].checked = true;
    //  }
    

    
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      contactNo: ['', Validators.required],
      gender: ['', Validators.required],
    });

  }

  // START DATE: 24112022, TITLE: Style elements dynamically with ngStyle
  getServerStatus(){
    return this.serverStatus;
  }
  getColor(){
    return this.serverStatus === 'Online' ? 'green' : 'red'
  }
  // END DATE: 24112022, TITLE: Style elements dynamically with ngStyle

  // persons:any;
  
  public persons:persongroup[] = [
    {
      id: 1,
      name: 'Hardik Savani',
      address:'Lamingaton road',
      contactNo:'0123456789',
      gender: 'Male',
    },
    {
      id: 2,
      name: 'Vishal Savani 2',
      address:'Borivali',
      contactNo:'0123456789',
      gender: 'Male',
    },
    {
      id: 3,
      name: 'Pranay Savani 3',
      address:'Virar',
      contactNo:'0123456789',
      gender: 'Male',
    },
  ]
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
    this.router.navigate(['/about'],{state:{
      selected:this.selected
    }});  // define your component where you want to go
  }

  eventHandler(event:string[]){
    this.childData = event;
  }

  eventhandling(val:any){
    console.warn(val)
  }


  // fruit: FruitData = FruitData.fruit[0];

  selectedobj(event){
    // console.log(event);
    // this.selectedfruit = event;
    // this.fruit = this.fruit.map(obj=>obj.name == event ? {...obj, selected :true}: {...obj ,selected :false});
    // console.log(this.fruit);
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

  description = 'nitesh'

  mtitle:string='';
  mdirector:string='';

  movies=[];

  btnRemoveList(i){
    this.movies.splice(i,1);
  }

  addMovie(){
    this.movies.push({
      title:this.mtitle,director:this.mdirector
    }),
    this.mtitle = ""
    this.mdirector = ""
  }

 refresh(){
  console.log('refresh')
  this.movies = [
    {
      title:'a',director:'nitesh'
    },
    {
      title:'b',director:'sameet'
    },
    {
      title:'c',director:'arvind'
    },
    {
      title:'d',director:'urvashi'
    },
  ]
 }

 public exampleList:any[]=[
  {
    name:'nitesh'
  },
  {
    name:'namratha'
  },
 ]

  btnRemove(i){
    this.emps.splice(i,1);
  }

  public emps:any[] =[
    {
      name:'nitesh emp',
      skills:[
        {
          skill:'html',
          experience:'2 years'
        },
      ]
    },
    {
      name:'sameet emp',
      skills:[
        {
          skill:'field service engieering',
          experience:'7 years'
        },
      ]
    },
    {
      name:'arvind emp',
      skills:[
        {
          skill:'ladies tailoring',
          experience:'20 years'
        },
      ]
    },
    {
      name:'urvashi emp',
      skills:[
        {
          skill:'housewife',
          experience:'39 years'
        },
      ]
    },
  ]

  public descItems:any[]=[
    {name:'nitesh'},
    {name:'sameet'},
    {name:'arvind'},
    {name:'urvashi'},
  ]


  ngOnInit() {
    this.checked = true;
    this.selectedValue = this.myArray[0].property1
    this.onValueChange();


    
    
    if (this.selected.length){
      for(let result=0;result<this.all.length;result++){
        var names = this.selected.map(obj => obj.name) //we are creating array of names form this.selected
        if(names.includes(this.all[result].name)){
          this.all[result].checked = true;
          this.exampleIf = false;
        }
        else{
          this.all[result].name = 'nonchecked '+  this.all[result].name
        }
      }
    }
    // console.log(this.all);
  }
  ngChange(){
    this.selected = this.router.getCurrentNavigation().extras.state? this.router.getCurrentNavigation().extras.state.selected: [];
    console.log(this.router.getCurrentNavigation().extras.state.selected); // should log out 'bar'
    for(let result=0;result<this.all.length;result++){
      var names = this.selected.map(obj => obj.name) //we are creating array of names form this.selected
      if(names.includes(this.all[result].name)){
        this.all[result].checked = true;
        this.exampleList
      }
      else{
        this.all[result].name = 'nonchecked '+ this.all[result].name
      }
    }
    console.log(this.all);
  }

  onValueChange() {
    const found = this.myArray.filter( obj => obj.property1 === this.selectedValue)
    // this.selectedObject = found? found[0] : {}
  }
}

