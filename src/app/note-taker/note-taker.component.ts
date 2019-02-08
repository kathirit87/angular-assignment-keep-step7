import { Component, OnInit } from '@angular/core';
import { NotesService } from '../services/notes.service';
import { Note } from '../note';

@Component({
  selector: 'app-note-taker',
  templateUrl: './note-taker.component.html',
  styleUrls: ['./note-taker.component.css']
})
export class NoteTakerComponent implements OnInit {
   errMessage: string;
   note: Note;

  constructor(private noteService: NotesService) {
  }

  ngOnInit() {
    this.note = new Note();
  }

  addNote() {
    this.errMessage = '';
    const msg = 'Title and Text both are required fields';

    if ( this.note === null || typeof(this.note) === 'undefined') {
      this.errMessage = msg;
      return false;
    }

    if ( this.note.noteTitle === null || this.note.noteContent === null  || typeof(this.note.noteTitle) === 'undefined'
      || typeof(this.note.noteContent) === 'undefined' ) {
      this.errMessage = msg;
      return false;
    }

    if ( this.note.noteTitle.trim() === '' || this.note.noteContent.trim() === '') {
      this.errMessage = msg;
      return false;
    }

    this.noteService.addNote(this.note).subscribe(data => {
      this.note = new Note();
    },
    err => {
      this.errMessage = err.message;
    });
  }
}
