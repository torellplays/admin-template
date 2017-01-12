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


formGroup = 'form-group';
hasFeedback = 'has-feedback';
hasError = 'has-error';

isFormGroup = true;
isHasFeedback = true;
isHasError = this.loginService.isHasError;

setClasses() {
  let classes =  {
    formGroup: this.isFormGroup,
    hasFeedback: this.isHasFeedback,
    hasError: this.isHasError,
  };
  //console.log(classes);

  return classes;
}


model = this.loginService.model;
onSubmit() {
    this.loginService.onSubmit();
}

log2() {
  return console.log(this.model);
}



}
