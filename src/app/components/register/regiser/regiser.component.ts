import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-regiser',
  templateUrl: './regiser.component.html',
  styleUrls: ['./regiser.component.scss']
})
export class RegiserComponent implements OnInit {

  // isPresent var is declared
  public isPresent:boolean = false;
  // Title variable declared
  public  title = 'My Angular App';
  // Defined cars array  
  public cars:any[] = ['Tesla', 'Toyota', 'BMW', 'Honda', 'Ford', 'Hyundai', 'Nissan', 'Porsche'];
  public currentCustomer = 'Nitesh Khatri';
  public itemImageUrl:string='https://images.unsplash.com/photo-1500423079914-b65af272b8db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMzQ0NTA3fHxlbnwwfHx8fA%3D%3D&w=1000&q=80'

  cssStringVar: string= 'blue size30';

  btnRemove(){
    this.cars.splice(0,1);
  }

  btnDel(){
    this.employees.splice(0,1);
  }

  constructor(private httpClient:HttpClient) {
   }

  ngOnInit() {
  }

  status='error';
  statustwo='success';

  apiUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  fetchData():Observable<any>{
    return this.httpClient.get(this.apiUrl)
  }

  public employees:any[] = [
    {
      name: "Rahul", 
      email: "rahul@gmail.com",
      skills: [
        { skill: 'Angular', exp: '2' },
        { skill: 'Javascript', exp: '7' },
        { skill: 'TypeScript', exp: '3' }
      ]
    },
    {
      name: "Sachin", 
      email: "sachin@gmail.com",
      skills: [
        { skill: 'Angular', exp: '1' },
        { skill: 'Android', exp: '3' },
        { skill: 'React', exp: '2' }
      ]
    },
    {
      name: "Laxmna", 
      email: "laxman@gmail.com",
      skills: [
        { skill: 'HTML', exp: '2' },
        { skill: 'CSS', exp: '2' },
        { skill: 'Javascript', exp: '1' }
      ]
    }
  ]

  public movies:Array<Movie> =[
    { title: 'Zootopia', director: 'Byron Howard, Rich Moore', cast: 'Idris Elba, Ginnifer Goodwin, Jason Bateman', releaseDate: 'March 4, 2016' },
    { title: 'Batman v Superman: Dawn of Justice', director: 'Zack Snyder', cast: 'Ben Affleck, Henry Cavill, Amy Adams', releaseDate: 'March 25, 2016' },
    { title: 'Captain American: Civil War', director: 'Anthony Russo, Joe Russo', cast: 'Scarlett Johansson, Elizabeth Olsen, Chris Evans', releaseDate: 'May 6, 2016' },
    { title: 'X-Men: Apocalypse', director: 'Bryan Singer', cast: 'Jennifer Lawrence, Olivia Munn, Oscar Isaac', releaseDate: 'May 27, 2016' },
    { title: 'Warcraft', director: 'Duncan Jones', cast: 'Travis Fimmel, Robert Kazinsky, Ben Foster', releaseDate: 'June 10, 2016' },
  ]

}


export interface Movie {
  title:string;
  director:string;
  cast:string;
  releaseDate:string;
}