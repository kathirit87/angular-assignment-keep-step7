import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { NotesService } from '../services/notes.service';
import { EditNoteViewComponent } from '../edit-note-view/edit-note-view.component';

@Component({
  selector: 'app-edit-note-opener',
  templateUrl: './edit-note-opener.component.html',
  styleUrls: ['./edit-note-opener.component.css']
})
export class EditNoteOpenerComponent implements OnInit {

  constructor(public dialog: MatDialog, private route: ActivatedRoute, private notesService: NotesService ) { }
    ngOnInit(): void {
      const noteId = +this.route.snapshot.paramMap.get('noteId');
      this.dialog.open(EditNoteViewComponent, { width: '250px', data: noteId })
        .afterClosed()
        .subscribe(result => {
          console.log('The dialog was closed');
          this.notesService.fetchNotesFromServer();
        });
      }
}
