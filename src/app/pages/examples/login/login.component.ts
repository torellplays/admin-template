import { Component, ViewEncapsulation } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'my-login',
  encapsulation: ViewEncapsulation.None,
  providers: [LoginService],
  template: require('./login.component.html')
})
export class LoginComponent {
  title = 'AdminLTE 2 | Log in';


  constructor(private loginService: LoginService) {
  }


  isFormGroup = true;
  isHasFeedback = true;
  isHasError = false;

  classes =  {
    'form-group': this.isFormGroup,
    'has-feedback': this.isHasFeedback,
    'has-error': this.isHasError,
  };

  model = this.loginService.model;
  
  onSubmit() {
      if (this.loginService.authenticate()) {
        this.isHasError = false;
      }
  }
}
