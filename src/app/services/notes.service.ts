import { Injectable } from '@angular/core';
import { Note } from '../note';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NotesService {

  notes: Array<Note>;
  notesSubject: BehaviorSubject<Array<Note>>;
  api = 'http://localhost:3000/api/v1/notes';
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
    .put<Note>(this.api + `/${note.id}`, note, {headers: this.header});
  }

  getNoteById(noteId): Note {
    return this.notes.find(i => i.id === noteId);
  }
}
