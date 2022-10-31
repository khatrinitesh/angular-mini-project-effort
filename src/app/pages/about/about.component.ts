import { Component, OnInit, Input, Output, EventEmitter, ViewChild, TemplateRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  msgOnChildCompInit: string;
  msgOnButtonClick: string;
  msgComponent: string;

  parentChildMsgs = 'Quis ex incididunt qui esse dolore est enim sint.'

  receiveAutoMsgHandler(p) {
    this.msgOnChildCompInit = p
  }

  receivedMsg(p) {
    this.msgComponent = p
  }

  receivedMessageHandler(p) {
    this.msgOnButtonClick = p
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

  public showNew: boolean = false
  public fullName: string = 'hello assurekit'
  public myFormGrp!: FormGroup;
  public receivedChildMessage: string;
  public receivedChildMessage2: string;
  public isLoggedIn: boolean = false
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
  public condition2: boolean = false;
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



  constructor(private api: ApiService) { }


  ngOnInit() {
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
