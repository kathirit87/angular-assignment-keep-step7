import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { RouterService } from '../services/router.service';
import { UserRegistrationService } from '../services/user-registration.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  submitMessage: string;
  userName= new FormControl();
  userId= new FormControl();
  userPassword= new FormControl();
  userMobile= new FormControl();
  registerForm: FormGroup = new FormGroup({
    userName: new FormControl(),
    userId: new FormControl(),
    userPassword: new FormControl(),
    userMobile: new FormControl()
  });
  @ViewChild(FormGroupDirective)
  formGroupDirective: FormGroupDirective;

  constructor(private routerService: RouterService,
                private userRegister: UserRegistrationService) {

  }
  
  ngOnInit() {
  }

  registerSubmit() {
    console.log("inside register submit form");

    this.userRegister.userRegistration(this.registerForm.value).subscribe( response =>
    {
      console.log("response : "+response);
      this.routerService.routeToLogin();
    },
    error => {
      if (error.status === 403) {
        this.submitMessage = error.error.message;
      } else {
        this.submitMessage = error.message;
      }

      console.log('err', error);
    });
      this.registerForm.reset();
      this.formGroupDirective.resetForm();
       
  }

}
