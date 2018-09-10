import { Component, Inject } from '@angular/core';
import { Note } from '../note';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-edit-note-view',
  templateUrl: './edit-note-view.component.html',
  styleUrls: ['./edit-note-view.component.css']
})
export class EditNoteViewComponent {
  note: Note;
  states: Array<string> = ['not-started', 'started', 'completed'];
  errMessage: string;

  constructor(public dialogRef: MatDialogRef<EditNoteViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Note,
    private noteService: NotesService) {
    this.note = data;
  }

  editNote() {
    this.errMessage = '';
    this.noteService.editNote(this.note).subscribe(data => {
      console.log('edit');
    this.note = new Note();
    this.dialogRef.close();
    },
    err => {
      this.errMessage = err.message;
    });
  }
  onSave() {
    this.errMessage = '';
    this.noteService.editNote(this.note).subscribe(data => {
      console.log('edit');
    this.note = new Note();
    this.dialogRef.close();
    },
    err => {
      this.errMessage = err.message;
    });
  }
}
