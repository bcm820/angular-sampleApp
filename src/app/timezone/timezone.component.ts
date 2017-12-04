import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timezone',
  templateUrl: './timezone.component.html',
  styleUrls: ['./timezone.component.css']
})
export class TimezoneComponent implements OnInit {

  title = "US Timezone Display";
  timezone = '';
  isTZ = false;
  
  now = new Date();
  
  constructor() { }

  ngOnInit() {
  }

  changeTimezone(tz){
    this.timezone = tz;
    if(this.timezone !== ''){
      this.isTZ = true;
    } else { this.isTZ = false; }
  }

}
