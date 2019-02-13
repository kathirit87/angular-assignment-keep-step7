import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from "@angular/router";

@Injectable()
export class RouterService {

  constructor(private router: Router, private location: Location) { }

  routeToDashboard() {
    this.router.navigate(['dashboard']);
  }

  routeToLogin() {
    this.router.navigate(['login']);
  }

  routeToUserRegistration() {
    this.router.navigate(['register']);
  }

  routeToEditNoteView(noteId) {
    this.router.navigate(['dashboard', {outlets: {noteEditOutlet: [ 'note', noteId, 'edit' ]}}]);
  }

  routeBack() {
    this.location.back();
  }

  routeToNoteView() {
    this.router.navigate(['dashboard/view/noteview']);
  }

  routeToListView() {
    this.router.navigate(['dashboard/view/listview']);
  }
}
