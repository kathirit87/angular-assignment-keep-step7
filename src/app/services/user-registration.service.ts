import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable()
export class UserRegistrationService {

  api = 'http://localhost:9200/api/v1/user';

  constructor(private httpService: HttpClient) {

  }

  userRegistration(data) {
    return this.httpService.post(this.api, data);
  }

}
