import { Component, OnInit } from '@angular/core';
import { NoteService } from './note.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  title = 'Currency Formats';
  value: number = 5678.9;
  notes = this._noteService.notes;

  constructor(private _noteService: NoteService) { }

  ngOnInit() {
    console.log(this._noteService.notes)
  }

}
