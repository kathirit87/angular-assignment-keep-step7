import { Injectable } from '@angular/core';
import { Note } from '../note';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable()
export class NotesService {

  notes: Array<Note>;
  notesSubject: BehaviorSubject<Array<Note>>;
  api = 'http://localhost:9300/api/v1/note';
  header: HttpHeaders;

  constructor(private httpClient: HttpClient, private authService: AuthenticationService) {
    this.header = new HttpHeaders({ 'Authorization': `Bearer ${this.authService.getBearerToken()}`});
    this.notesSubject = new BehaviorSubject<Array<Note>>([]);
    this.notes = Array<Note>();
  }

  fetchNotesFromServer() {
    return this.httpClient.get<Note[]>(this.api, { headers: this.header }).subscribe((data) => {
      this.notes = data;
      this.notesSubject.next(this.notes);
      console.log("notes ::"+this.notes)
    },
    (error) => {
      console.log(error);
    });
  }

  getNotes(): BehaviorSubject<Array<Note>> {
    return this.notesSubject;
  }

  addNote(note: Note): Observable<Note> {
    return this.httpClient.post<Note>(this.api, note, {headers: this.header});
  }

  editNote(note: Note): Observable<Note> {
    return this.httpClient
    .put<Note>(this.api + `/${note.noteId}`, note, {headers: this.header});
  }

  getNoteById(noteId): Note {
    return this.notes.find(i => i.noteId === noteId);
  }
}
