import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup ,Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public isDisplayed:boolean=true;
  public date= new Date();
  public lastName:string= 'khatri';
  public Value:number=500;
  public birthday:string='17th-June-1989'
  public datePipeString : string;
  public customDate = this.date;
  public chosenObj:any;
  public imageHeight: number = 200;
  public imageWidth: number = 200;
  public toggle:boolean = true;
  public status = 'Enable'; 
  // public color:any;
  public IsBold:boolean=true;
  public check:boolean=true;
  public exampleone:boolean=false;
  public exampletwo:boolean=true;
  public isActive:boolean=true;
  public image =
  'https://www.rollingstone.com/wp-content/uploads/2020/01/eminem-review.jpg?resize=120,120&w=120';
  public Data: DataObj[] = [
    { id: 'one', name: 'Food' },
    { id: 'two', name: 'Travel' },
    { id: 'three', name: 'Education' },
    { id: 'four', name: 'Goverment' },
  ];
  public customcolor = '#ff0000';
  public isCourse:boolean = true;
  public courses:Courses[] = [
      {
        name: "Introduction to Web Development",
        level: "Beginner",
        color: "green",
        background:'cyan',
      },
      {
        name: "Understanding APIs",
        level: "Beginner",
        color: "green",
        background:'violet',
      },
      {
        name: "Introduction to Docker Containers",
        level: "Advanced",
        color: "red",
        background:'lightred',
      },
      {
        name: "Understanding Time complexities",
        level: "Advanced",
        color: "red",
        background:'pink',
      },
      {
        name: "Algorithms and Data Structures",
        level: "Advanced",
        color: "red",
        background:'purple',
      },
      {
        name: "My first HTML page",
        level: "Beginner",
        color: "green",
        background:'yellow',
      },
      {
        name: "Ways to use CSS in your web page",
        level: "Beginner",
        color: "green",
        background:'lightblue',
      },
      {
        name: "Introduction to Unit testing",
        level: "Beginner",
        color: "green",
        background:'powderblue',
      },
      {
        name: "What are PWAs",
        level: "Beginner",
        color: "green",
        background:'orange',
      }
    ];

    public btns:any[] =['prev','next'];
    public items:any[] = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth'];
    public activeItemIndex:number = 0;
    public isDisabled: boolean = true;
  colorSelected(newColor) {
    console.log('colorSelected', newColor);
    this.customcolor = newColor;
  }

  myFiles:string [] = [];
  
  myForm = new FormGroup({
   name: new FormControl('', [Validators.required, Validators.minLength(3)]),
   file: new FormControl('', [Validators.required])
 });

 get f(){
  return this.myForm.controls;
}
   
onFileChange(event) {
 
      for (var i = 0; i < event.target.files.length; i++) { 
          this.myFiles.push(event.target.files[i]);
      }
}
    
submit(){
  const formData = new FormData();

  for (var i = 0; i < this.myFiles.length; i++) { 
    formData.append("file[]", this.myFiles[i]);
  }

  this.http.post('http://localhost:8001/upload.php', formData)
    .subscribe(res => {
      console.log(res);
      alert('Uploaded Successfully.');
    })
}
   

  btnToggle(){
    this.IsBold = !this.IsBold;
  }

  enableDisableRule(){
    this.toggle = !this.toggle
    this.status = this.status ? 'enable' : 'disable'
  }
  public isFavorite: boolean = true;

  public myProducts:Products[] = [
    {
        id: 1,
        title: 'Gold',
        status: 'active'
    },
    {
        id: 2,
        title: 'Silver',
        status: 'pending'
    },
    {
        id: 3,
        title: 'Bronze',
        status: 'expired'
    },
 ]


 showHideText(){
  this.isDisplayed = !this.isDisplayed;
 }

  constructor(private fb: FormBuilder,private http: HttpClient) {     
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['Sammy', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(15)]],
    });
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.name);
    console.log('Email', form.value.email);
    console.log('Message', form.value.message);
  }
}


interface DataObj{
  id:string;
  name:string;
}

interface Courses{
  name: string;
  level:string;
  color:string;
  background:string;
}

interface Products {
  id:number;
  title:string;
  status:string;
}