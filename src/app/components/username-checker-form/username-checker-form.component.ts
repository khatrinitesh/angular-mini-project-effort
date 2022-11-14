import { Component, OnInit } from '@angular/core';
import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-username-checker-form',
  templateUrl: './username-checker-form.component.html',
  styleUrls: ['./username-checker-form.component.scss']
})
export class UsernameCheckerFormComponent implements OnInit {


  public username:string = '';
  public usernames: string[] = [ 'bart', 'lisa', 'fry', 'leela' ];
  public message:string = ''
  isValidUsername:boolean = false;


  save(){
    if(this.username != ''){
      this.isValidUsername = !this.usernames.includes(this.username.toLowerCase()
      );
      if(this.isValidUsername){
        this.message = `Your new username is '${this.username}'`
      }
      else{
        this.message = `The username '${this.username}' has already been taken`
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
