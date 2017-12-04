import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dojomail',
  templateUrl: './dojomail.component.html',
  styleUrls: ['./dojomail.component.css']
})
export class DojomailComponent implements OnInit {

  title = 'Dojo Mail';

  emails = [
    {email:'Bill@Gates.com', importance:true, subject:'New Windows', content:'Windows XI will launch in 2100.'},
    {email:'Ada@lovelace.com', importance:true, subject:'Programming', content:'Enchantress of Numbers'},
    {email:'John@Carmac.com', importance:false, subject:'Updated algo', content:'New algo for shadow volumes'},
    {email:'Gabe@Newel.com', importance:false, subject:'HL3!', content:'Just kidding...'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
