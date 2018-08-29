import { Component, OnInit } from '@angular/core';
import { NotesService } from '../services/notes.service';
import { Note } from '../note';

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent implements OnInit {

  notes: Array<Note>;
  constructor(private noteService: NotesService) { }

  ngOnInit() {
      this.noteService.getNotes().subscribe((data) => {
        this.notes = data;
      });
  }
}
