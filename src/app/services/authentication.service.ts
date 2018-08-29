import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
  @Output() isLoggedIn: EventEmitter<Boolean> = new EventEmitter();
  constructor(private httpService: HttpClient) {

  }

  authenticateUser(data) {
    return this.httpService.post('http://localhost:3000/auth/v1/', data);
  }

  setBearerToken(token) {
    localStorage.setItem('bearerToken', token);
  }

  getBearerToken() {
    return localStorage.getItem('bearerToken');
  }

  isUserAuthenticated(token): Promise<boolean> {
    return this.httpService.post('http://localhost:3000/auth/v1/isAuthenticated', {}, {
      headers: new HttpHeaders({ 'Authorization': `Bearer ${token}` })
    }).map((res) => res['isAuthenticated']).toPromise();
  }
}
