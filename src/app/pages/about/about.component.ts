import { Component, ElementRef,OnInit, Input, Output, EventEmitter, ViewChild, TemplateRef } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import {MyserviceService} from '../../service/myservice.service';
import { HttpClient } from  '@angular/common/http';
import { map } from 'rxjs/operators';  
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { Router } from '@angular/router';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  

  public exampleForm:FormGroup;
  

  // public selected = [];
  
  public FrGrp:any;
  public Books:any;
  msgOnChildCompInit: string; // 1
  msgOnButtonClick: string; // 2
  msgComponentTxt: string; // 3
  title = 'my-first-app';  
  todaydate = new Date();  
  jsonval = {name: 'Alex', age: '25', address:{a1: 'Paris', a2: 'France'}};  
  months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];  

  public parentMsg  = 'nitesh khatri is parentmsg'
  buttonTitle:string = "Show";
  visible:boolean = true;
  editdata:any;
  public hasSearched:boolean=false;
  public LogoSourceUrl:string = 'https://via.placeholder.com/350x150'
  // userName:boolean=true
  accountId:boolean=true
  emailAddress:string='';

  // INPUT
  @Input() imageName: string;
  @Input() locationName: string;

  // PLAYLISTS 
  public noPlaylists:boolean=false 
  public renamingPlaylists:boolean=true;

  public playlists:any = [
    {"name": "Rock", "numberOfSongs": 5, "rating": 5},
    {"name": "Contemporary", "numberOfSongs": 9, "rating": 1},
    {"name": "Popular", "numberOfSongs": 14, "rating": 5},
    {"name": "Acoustic", "numberOfSongs": 3, "rating": 4},
    {"name": "Wedding Songs", "numberOfSongs": 25, "rating": 5},
    {"name": "Metal", "numberOfSongs": 0, "rating": 0},
  ]

  public abced = [
    {

      id:11,name:'a',age:33,role:'admin',score:44
    },
    {
      id:12,name:'u',age:43,role:'user',score:44
    },
    {
      id:13,name:'s',age:40,role:'public',score:44
    },
    {
      id:14,name:'n',age:67,role:'admin',score:54
    },
    {

      id:11,name:'a',age:64,role:'user',score:100
    },
    {
      id:12,name:'u',age:40,role:'admin',score:35
    },
  ]
  public items = [
    {
      id:11,name:'a',
    },
    {
      id:12,name:'u',
    },
    {
      id:13,name:'s',
    },
    {
      id:14,name:'n',
    },
  ]
  

  public employeeTwoData = [
    {
      empid: 5623,fullname: "Stephen",city: "Newyork",experience: "5 years"  
    },
    { empid: 6523,fullname: "Michel",city: "london",experience: "7 years"
    },
    { empid: 6523,fullname: "peeter",city: "Dubai",experience: "8 years"
    },
    { empid: 7458,fullname: "stella",city: "Paris",experience: "4 years"
    }
  ]

  public employeedata = [
    {
      empid: 5623,
      fullname: "Stephen",
      city: "Newyork",
      experience: "5 years",
      salary: 500000,
      married: false,
      role: 'admin'
    },
    {
      empid: 6523,
      fullname: "Michel",
      city: "london",
      experience: "7 years",
      salary: 700000,
      married: true,
      role: 'user'
    },
    {
      empid: 6523,
      fullname: "peeter",
      city: "Dubai",
      experience: "8 years",
     // salary: null,
      married: true,
      role: 'public'
    },
    {
      empid: 7458,
      fullname: "stella",
      city: "Paris",
      experience: "4 years",
      salary: 400000,
      married: false,
      role: 'user'
    }
  ]
  

  public friendsTwo = [
    { id: 11, name: 'Watch', price: '5000.00' },
    { id: 12, name: 'T-Shirt', price: '2000.00' },
    { id: 13, name: 'Bag', price: '1000.00' },
    { id: 14, name: 'Laptop', price: '40000.00' },
    { id: 15, name: 'LED TV', price: '25000.00' }
  ]

  public products = [
    { id: 1, name: 'Watch', price: '5000.00' },
    { id: 2, name: 'T-Shirt', price: '2000.00' },
    { id: 3, name: 'Bag', price: '1000.00' },
    { id: 4, name: 'Laptop', price: '40000.00' },
    { id: 5, name: 'LED TV', price: '25000.00' }
  ];

  public familyText = [
    { id:21, name: 'n'},
    { id: 22, name: 'm'},
    { id: 23, name: 's'},
    { id: 24, name: 'a'},
    { id: 25, name: 'u' }
  ];

  public foodItem = [
    {id:26,name:'dosa'},
    {id:27,name:'medu vada'},
    {id:28,name:'thali'},
  ]

  productStatus:string;

  onStatus(active:boolean){
    active ? this.productStatus = 'Enabled' : this.productStatus = 'Disabled';
  }

  oninputchange(){
    console.log(this.exampleForm)
  }

  showhideUtility(){
    this.visible = this.visible ? false : true
    this.buttonTitle = this.visible ? "Show":"Hide";
  }

  rows:number=5;
  cols:number=4;
  height:string='100%';
  // title:'States';
  public testing:any;
  public  results:any;
  dateToday: string;
  nametwo:string

  showDataTwo(){
    this.testing = HeroData;
  }

  noShowData(){
    this.testing = emptyHeroData
  }
  btnResetData(){
    this.testing = [{}];
  }



  showData(){
    this.results = Heros;
  }

  showEmptyData(){
    this.results = emptyHeros;
  }

  btnReset(){
    this.results = [{}];
  }

  angForm:FormGroup

  
  public state :any[]= [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas'];

    btnRemove(index){
      this.state.splice(index,1)
    }

  public harryList = ['Buy Apples', 'Buy Shoes', 'Buy Chicken'];
  public samList = ['Buy Oranges', 'Buy Socks', 'Buy Pork'];
  public friends :any = ['pranay','tejas','vishal']
  public family : any = ['mom','daddy','brother','sisterinlaw']
  public collegefriends :any =['abdulla','siddarath','punit']
  public colleague :any = ['gokul','abhijeet','siddhesh']
  public readonly form:FormGroup;
  public selectedfromParent: any;

  constructor(private el:ElementRef,private api: ApiService,private formBuilder:FormBuilder,private myservice:MyserviceService,private http:HttpClient,private router: Router,private location:Location,private fb:FormBuilder) { 
    this.createForm(),
    this.setStyle('--rows',this.rows)
    this.setStyle('--cols',this.cols)
    this.selectedfromParent = this.router.getCurrentNavigation().extras.state.selected;
    console.log(this.router.getCurrentNavigation().extras.state.selected);
    // this.setStyle('--height',this.height)

    // this.form = new FormGroup({
    //   'email': new FormControl(null, [Validators.required, Validators.email]),
    //   'password': new FormControl(null, [Validators.required]),
    //   'confirmation': new FormControl(null, [Validators.required])
    // });
    
  }

  countryForm:FormGroup;
  public countries2 = ['USA', 'Canada', 'Uk']

  goBack(){
    // this.location.back();
    this.router.navigate(['/'],{state:{selected:this.selectedfromParent}});  // define your component where you want to go

  }

  createForm(){
    this.exampleForm = this.formBuilder.group({
      name:['',Validators.required],
      address: ['', Validators.required ]
    })
    console.log(this.exampleForm)
  }

  setStyle(s,v){
    document.documentElement.style.setProperty(s,v)
  }
  toggleActive(e){
    e.target.value.classList.toggle('active');
  }

  handleColorChange(color){
    (this.el.nativeElement as HTMLElement).style.setProperty('--main-color',color)
  }

  public toggleOnTxt:boolean=false;
  public flagTwo:boolean=false;
  public showMe:boolean=false;
  public conditionexample:boolean=false;

  public marks :any = [
    10, 20, 30, 40 , 50 , 60 , 70 , 80, 90, 100, 110, 120
  ];

  getClassTwo(mark){
    if(mark <= 30)
    return 'beginner';
    else if(mark <= 75)
    return 'intermediate'
    else if(mark <= 100)
    return 'expert'
    else 'other'
  }

  btnToggleOnOff(){
    this.toggleOnTxt = !this.toggleOnTxt
  }

  condition:boolean=false;
  condition2:boolean=true;

  isValid:boolean=false;

  parentChildMsgs = 'Quis ex incididunt qui esse dolore est enim sint.'

  public numbers = [
    10, 22, 345, 45, 55, 650
  ]

  add() {
    this.numbers.push(Math.floor(Math.random() * 1000))
  }

  remove(i) {
    this.numbers.splice(i, 1)
  }

  receiveAutoMsgHandler(p) {
    this.msgOnChildCompInit = p
  }

  receivedMessageHandler(p) {
    this.msgOnButtonClick = p
  }

  receivedMsg(p) {
    this.msgComponentTxt = p
  }

  multiple = true;

  public users: any;

  hasError: boolean = false;
  styleArray = ['errorClass', 'boldClass']
  styleObject = {
    'errorClass': true,
    'boldClass': true,
    'italicsClass': true,
    'greenClass': false,
  }

  getGreenClass() {
    return 'greenClass';
  }

  

  public showImage: boolean = true;

  btnToggleImg() {
    this.showImage = !this.showImage
  }


  // public selected:boolean=false;
  public httpd:any;
  public httpdTwo:any;
  public showNew: boolean = false
  public fullName: string = 'hello assurekit'
  public myFormGrp!: FormGroup;
  public receivedChildMessage: string;
  public receivedChildMessage2: string;
  public isLoggedIn: boolean = true
  public isNewUser: boolean = true
  public isDone: boolean = false;
  public isDoneNew: boolean = true;
  public showBox: boolean = true;
  public messageToSendP: string = '';
  public TextStep: string = 'Nitesh Khatri is Step';
  public currentItem: string = 'This is current item.'
  public dynamicdata: string = 'This is dynamic data!';
  public staticdata: string = 'This is static data!';
  interval: number;
  public limeCounter: number = 0;
  public userName = ''
  public userPhone = ''
  public name: string;
  public subject: string;
  public txtChange: boolean = false;
  public classToggled: boolean = false;
  public isVisible: boolean = false;
  public showhideText: any = 'show';
  public loginText = 'Login';
  public signUpText = 'Sign Up';
  public condition1: boolean = true;
  // public condition2: boolean = false;
  public sameet: boolean = true;
  public nitesh: boolean = false;
  public applyClass: boolean = true;
  public applyStyle: boolean = true;
  public applyClassP: boolean = false;
  public applyClassPOne: boolean = false;
  public setClassFlag: boolean = false;
  public flag: boolean = true;
  public isActive: boolean = true;
  lessons = ['Lesson 1', 'Lesson 2']

  getClass() {
    return {
      'paragraph anotherParagraph': this.setClassFlag
    }
  }



  login(): void {
    console.log('Login')
  }
  signUp() {
    console.log('Sign Up')
  }

  hideList() {
    this.isVisible = !this.isVisible
    if (this.isVisible) {
      this.showhideText = 'hide'
    }
    else {
      this.showhideText = 'show'
    }
  }

  public todos = [
    {
      content: 'Todo Content 1',
    },
    {
      content: 'Todo Content 2',
    },
    {
      content: 'Todo Content 3',
    },
  ]

  public friendslist = [
    {
      name: 'Nishant',
      age: 25
    },
    {
      name: 'Shailesh',
      age: 45
    },
    {
      name: 'Abhishek',
      age: 36
    },
    {
      name: 'Akshay',
      age: 65
    },
    {
      name: 'Ashish',
      age: 12
    },
    {
      name: 'Uday',
      age: 31
    },
    {
      name: 'Mayank',
      age: 45
    },
    {
      name: 'Raju',
      age: 74
    },
  ]

  showToggle() {
    this.showNew = !this.showNew
    this.txtChange = !this.txtChange
    this.classToggled = !this.classToggled
    console.log(this.showNew != this.showNew)
  }

  nameEventHander($event: any) {
    this.userName = $event
  }
  phoneEventHander($event: any) {
    this.userPhone = $event
  }

  getMsg(msg: string) {
    this.receivedChildMessage = msg;
  }

  // start() {
  //   setTimeout(() => {
  //     this.interval = setInterval(() => {
  //       this.dynamicdata = new Date().toLocaleTimeString();
  //     })
  //   }, 1000);
  // }

  // stop() {
  //   clearInterval(this.interval)
  // }

  ClickOut(msg: string) {
    this.receivedChildMessage2 = msg;
  }

  sendToChild(msg: string) {
    this.messageToSendP = msg;
  }

  // ARRAY DATA FOR COUNTRY
  public countries = [
    { name: 'india' },
    { name: 'pakistan' },
    { name: 'australia' },
    { name: 'new zealand' },
    { name: 'west indies' },
  ]

  // ARRAY DATA FOR FORM DETAILS 
  public FORM_DATA = [
    {
      formGrpLabel: 'Personal Information',
      formGrpName: 'controlGroup1',
      formControls: [
        {
          label: 'First Name',
          name: 'first_name',
          value: '',
          required: true,
          type: 'text',
        },
        {
          label: 'Middle Name',
          name: 'mid_name',
          value: '',
          required: false,
          type: 'text',
        },
        {
          label: 'Last Name',
          name: 'last_name',
          value: '',
          required: true,
          type: 'text',
        },
      ],
    },
    {
      formGrpLabel: 'Company Details',
      formGrpName: 'controlGroup2',
      formControls: [
        {
          label: 'Company Name',
          name: 'comp_name',
          value: '',
          required: true,
          type: 'text',
        },
        {
          label: 'Company Address',
          name: 'comp_address',
          value: '',
          required: true,
          type: 'textarea',
        },
        {
          label: 'Accept Terms',
          name: 'accept_terms',
          value: '',
          required: true,
          type: 'checkbox',
        },
      ],
    },
  ];




  // ARRAY DATA FOR FILTERDATA 
  public filterData = [
    {
      firstName: 'Celestine',
      lastName: 'Schimmel',
      address: '7687 Jadon Port'
    },
    {
      firstName: 'Johan',
      lastName: 'Ziemann PhD',
      address: '156 Streich Ports'
    },
    {
      firstName: 'Lizzie',
      lastName: 'Schumm',
      address: '5203 Jordon Center'
    },
    {
      firstName: 'Gavin',
      lastName: 'Leannon',
      address: '91057 Davion Club'
    },
    {
      firstName: 'Lucious',
      lastName: 'Leuschke',
      address: '16288 Reichel Harbor'
    }
  ]



  onClickedOutside(e: Event) {
    this.showBox = false;
  }

  incrementLimeCounter(amount) {
    this.limeCounter += amount;
  }

  people: any[] = [
    {
      "name": "Douglas  Pace",
      "age": 35,
      "country": 'MARS'
    },
    {
      "name": "Mcleod  Mueller",
      "age": 32,
      "country": 'USA'
    },
    {
      "name": "Day  Meyers",
      "age": 21,
      "country": 'HK'
    },
    {
      "name": "Aguirre  Ellis",
      "age": 34,
      "country": 'UK'
    },
    {
      "name": "Cook  Tyson",
      "age": 32,
      "country": 'USA'
    }
  ];

  

  btnRemoveJSON(data:any){
    this.httpd = this.httpd.filter(obj=>obj.id != data.id)
  }
  // btnEditJSON(data:any){
  //   this.editdata[data] = true;
  //   console.log(this.httpdata);
  // }
  // editedvalue(){
  //   console.log(this.httpdata);
  // }

  

  ngOnInit() {

    this.countryForm = this.fb.group({
      countryControl:['Canada']
    })
    // if(this.imageName){
    //   this.imageName = 'https://image.shutterstock.com/image-illustration/triangle-solid-black-golden-illustration-260nw-1862937556.jpg'
    // }
    // else{
    //   this.imageName = 'https://helmpaint.com/wp-content/uploads/2020/01/3-D-wallpaper.jpg'
    // }

    if(this.playlists.length === 0) {
      this.noPlaylists = true;
    }

    console.log(this.employeedata);

    this.http.get("http://jsonplaceholder.typicode.com/users").subscribe((data) => { 
      console.log(data);
      this.httpd= data
    });


    this.todaydate = this.myservice.showTodayDate();

    this.dateToday = new Date().toDateString();
    this.name = 'Simplilearn'

    this.generateForm();
    this.api.get('users?page=2').subscribe(res => {
      this.users = res;
      console.log('data response', this.users);
    })
  }

  // Create reactive form
  generateForm() {
    const group: FormGroup = new FormGroup({});
    this.FORM_DATA.forEach((fg) => {
      const formGroup: FormGroup = new FormGroup({});
      fg.formControls.forEach((fc) => {
        const nCtrol = {
          name: fc.name,
          control: fc.required
            ? new FormControl(fc.value || '', Validators.required)
            : new FormControl(fc.value || ''),
        };

        formGroup.addControl(fc.name, nCtrol.control);
      });

      group.addControl(fg.formGrpName, formGroup);
    });
    this.myFormGrp = group;
  }

  // Get from data
  getValues() {
    let completeValue: { [x: string]: any } = {};

    this.FORM_DATA.forEach((fg) => {
      completeValue[fg.formGrpName] =
        this.myFormGrp.controls[fg.formGrpName].value;
    });
    console.log(completeValue);
  }

  // Action handler method
  enableDisableFormGroup(opration: string) {
    switch (opration) {
      case 'disable1':
        this.myFormGrp.get('controlGroup1')!.disable();
        break;

      case 'disable2':
        this.myFormGrp.get('controlGroup2')!.disable();
        break;

      case 'enable1':
        this.myFormGrp.get('controlGroup1')!.enable();

        break;

      case 'enable2':
        this.myFormGrp.get('controlGroup2')!.enable();
        break;

      case 'reset1':
        this.myFormGrp.get('controlGroup1')!.reset();

        break;

      case 'reset2':
        this.myFormGrp.get('controlGroup2')!.reset();

        break;

      default:
        break;
    }
  }

  // Add froms group and its control
  addControl() {
    let t = new Date().getTime();
    const formGroup: FormGroup = new FormGroup({});
    const nCtrol = {
      name: 'newControl' + t,
      control: new FormControl('', Validators.required),
    };
    formGroup.addControl('newControl' + t, nCtrol.control);
    this.myFormGrp.addControl('newFromGroup' + t, formGroup);

    this.FORM_DATA.push({
      formGrpLabel: 'New From Group' + t,
      formGrpName: 'newFromGroup' + t,
      formControls: [
        {
          label: 'New Control' + t,
          name: 'newControl' + t,
          value: '',
          required: true,
          type: 'text',
        },
      ],
    });
  }

  
}

// START => BOOKS TESTING
// export interface IEmployee{  
//   employeeId : number;  
//   employeeName : string;  
//   projectId : number  
// } 

// const employees : IEmployee[] = [
//   {
//      "employeeId":1,
//      "employeeName" : "Tuba",
//      "projectId":100
//     },
//     {
//     "employeeId" : 2,
//    "employeeName" : "Atul",
//    "projectId":101,
//   },
//     {
//      "employeeId" : 3,
//      "employeeName" : "Theran",
//      "projectId":101
//     }
//   ]

//START => FRIENDSGROUP TESTING
export interface FriendsGroup  {
  id:number;
  name:string; 
}

const FrGrp : FriendsGroup[] = [
  {
    id:1,
    name:'abc'
  },
  {
    id:2,
    name:'def'
  },

  {
    id:3,
    name:'ghi'
  },
  {
    id:4,
    name:'jkl'
  },
]


// START => HERO TESTING
export interface HeroTesting {
  id:number;
  name:string;
}
const emptyHeroData:HeroTesting[]= []
const HeroData: HeroTesting[] =[
  {
    id:1,name:'n',
  },
  {
    id:2,name:'s',
  },
  {
    id:3,name:'m',
  },
  {
    id:4,name:'a',
  },
  {
    id:5,name:'u',
  },
]
// END => HERO TESTING

// START => HERO
export interface Hero {
  id: number;
  name: string;
  icon:boolean;
  dob:string
}
const emptyHeros:Hero[] = []
const Heros : Hero[] = [
  { id: 11, name: 'Dr Nice',icon:true,dob:'17061989'},
  { id: 12, name: 'Narco' ,icon:false,dob:'17061989'},
  { id: 13, name: 'Bombasto',icon:true,dob:'17061989' },
  { id: 14, name: 'Celeritas' ,icon:true,dob:'17061989'},
  { id: 15, name: 'Magneta' ,icon:true,dob:'17061989'},
  { id: 16, name: 'RubberMan' ,icon:true,dob:'17061989'},
  { id: 17, name: 'Dynama' ,icon:true,dob:'17061989'},
  { id: 18, name: 'Dr IQ' ,icon:true,dob:'17061989'},
  { id: 19, name: 'Magma' ,icon:true,dob:'17061989'},
  { id: 20, name: 'Tornado' ,icon:true,dob:'17061989'}
]
// END => HERO


// function passwordConfirmationMissmatch(control: FormGroup): ValidationErrors | null {
//   const password = control.get('password');
//   const confirmation = control.get('confirmation');
//   if (!password || !confirmation || password.value === confirmation.value) {
//     return null;
//   }
  
//   return { 'password-confirmation-mismatch': true };
// }