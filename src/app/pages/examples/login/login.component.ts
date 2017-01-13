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

  hasError = false;
  isHidden = true;

  model = this.loginService.model;
  
  onSubmit() {
      this.loginService.authenticate();
      this.hasError = this.loginService.hasError;
      this.isHidden = this.loginService.isHidden;
  }
}
