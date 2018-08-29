import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { NotesService } from '../services/notes.service';
import { EditNoteViewComponent } from '../edit-note-view/edit-note-view.component';

@Component({
  selector: 'app-edit-note-opener',
  templateUrl: './edit-note-opener.component.html',
  styleUrls: ['./edit-note-opener.component.css']
})
export class EditNoteOpenerComponent {
  noteId: Number;
  constructor(public dialog: MatDialog, private route: ActivatedRoute, private notesService: NotesService ) {
       this.noteId = this.route.snapshot.params.noteId;
       const dialogRef = this.dialog.open(EditNoteViewComponent, {
        width: '250px',
        data: this.notesService.getNoteById(this.noteId)
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.notesService.fetchNotesFromServer();
      });

    }
}
