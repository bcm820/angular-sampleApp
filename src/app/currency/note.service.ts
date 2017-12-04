import { Injectable } from '@angular/core';

@Injectable()
export class NoteService {

  notes = [
    {title: 'first note'},
    {title: 'second note'},
    {title: 'third note'}
  ];

  constructor() {
  }

}
