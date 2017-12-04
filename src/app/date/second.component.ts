import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  title = 'Date Formats';
  @Input() today;
  @Output() updateDate = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  
  update(){
    this.updateDate.emit();
  }

}
