import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  // model defined simply for two-way data binding
  user = new User();
  users = [];
  id_count = 1;
  latest;

  onInit(){
  }
  
  onSubmit(pageForm){
    
    pageForm.form.markAsPristine();
    
    this.user.id = this.id_count;

    // normally, make API call to post user object
    this.users.push(this.user);

    // after each submission, reset user object
    this.user = new User();
    this.id_count++;
    this.latest = this.users[this.users.length-1];

    console.log(this.latest);

  }

}
