import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterService } from '../services/router.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isNoteView = true;
  constructor(private router: Router, private routerService: RouterService, private authService: AuthenticationService) {

    if (this.router.url === 'dashboard/view/listview') {
      this.isNoteView = false;
    } else {
      this.isNoteView = true;
    }
  }

  setView(view: string): void {
    if (view === 'lv') {
        this.routerService.routeToListView();
        this.isNoteView = false;
    } else {
        this.routerService.routeToNoteView();
        this.isNoteView = true;
    }
  }

  logout() {
    this.authService.clearBearerToken();
    
    this.routerService.routeToLogin();
  }
}
