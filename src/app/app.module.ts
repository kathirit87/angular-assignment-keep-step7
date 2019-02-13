import { NgModule } from '@angular/core';
import { MatToolbarModule, MatExpansionModule, MatCardModule, MatListModule, MatFormFieldModule
        , MatInputModule, MatButtonModule, MatDialogModule, MAT_DIALOG_DATA, MatSelectModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListViewComponent } from './list-view/list-view.component';
import { NoteViewComponent } from './note-view/note-view.component';
import { NoteTakerComponent } from './note-taker/note-taker.component';
import { NoteComponent } from './note/note.component';
import { EditNoteOpenerComponent } from './edit-note-opener/edit-note-opener.component';
import { EditNoteViewComponent } from './edit-note-view/edit-note-view.component';
import { AuthenticationService } from './services/authentication.service';
import { NotesService } from './services/notes.service';
import { RouterService } from './services/router.service';
import { HttpClientModule } from '@angular/common/http';
import { CanActivateRouteGuard } from './can-activate-route.guard';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: UserRegistrationComponent },
  { path: 'dashboard',
    component: DashboardComponent,
    canActivate: [ CanActivateRouteGuard ],
    children: [
      { path: '', redirectTo: 'view/noteview', pathMatch: 'full' },
      { path: 'view/noteview', component: NoteViewComponent },
      { path: 'view/listview', component: ListViewComponent },
      { path: 'note/:noteId/edit', component: EditNoteOpenerComponent, outlet: 'noteEditOutlet', canActivate: [CanActivateRouteGuard] }
    ]
  }
];


@NgModule({
  declarations: [ AppComponent,
                  HeaderComponent,
                  LoginComponent,
                  DashboardComponent,
                  NoteViewComponent,
                  ListViewComponent,
                  EditNoteOpenerComponent,
                  EditNoteViewComponent,
                  NoteTakerComponent,
                  NoteComponent,
                  UserRegistrationComponent
                ],
  imports: [  HttpClientModule,
              BrowserModule,
              BrowserAnimationsModule,
              MatToolbarModule,
              MatExpansionModule,
              MatCardModule,
              MatListModule,
              MatFormFieldModule,
              MatInputModule,
              MatButtonModule,
              MatDialogModule,
              MatSelectModule,
              ReactiveFormsModule,
              FormsModule,
              RouterModule.forRoot(routes)
            ],
  providers: [AuthenticationService, NotesService, RouterService, CanActivateRouteGuard],
  bootstrap: [ AppComponent ],
  entryComponents: [ EditNoteViewComponent ]
})
export class AppModule { }
