import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switchboard',
  templateUrl: './switchboard.component.html',
  styleUrls: ['./switchboard.component.css']
})
export class SwitchboardComponent implements OnInit {

  title = 'Switchboard';
  
  switchboard = [false,false,false,false,false,false,false,false];
  
  constructor() { }

  ngOnInit() {
  }

  switchIt(i){
    if(this.switchboard[i] === false){
      this.switchboard[i] = true;
    } else { this.switchboard[i] = false; }
  }

}
