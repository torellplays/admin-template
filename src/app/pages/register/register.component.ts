import {Component, ViewEncapsulation} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {EmailValidator, EqualPasswordsValidator} from '../../theme/validators';
import { Router } from '@angular/router';

import { UserService } from '../../theme/services/UserService/user.service';


@Component({
  selector: 'register',
  providers: [UserService],
  encapsulation: ViewEncapsulation.None,
  template: require('./register.html')
})
export class Register {


  model: any = {};
  public form:FormGroup;
  public firstName:AbstractControl;
  public email:AbstractControl;
  public password:AbstractControl;
  public repeatPassword:AbstractControl;
  public passwords:FormGroup;


  isHidden = true;
  hasError = false;
  loading = false;

  constructor(
    private router: Router,
    private userService: UserService,
    fb: FormBuilder
    ) {

    this.form = fb.group({
    'firstName': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
    'email': ['', Validators.compose([Validators.required, EmailValidator.validate])],
    'passwords': fb.group({
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'repeatPassword': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    }, {validator: EqualPasswordsValidator.validate('password', 'repeatPassword')})
  });

    this.firstName = this.form.controls['firstName'];
    this.email = this.form.controls['email'];
    this.passwords = <FormGroup> this.form.controls['passwords'];
    this.password = this.passwords.controls['password'];
    this.repeatPassword = this.passwords.controls['repeatPassword'];
  }


  public register() {
    this.loading = true;
    if (this.form.valid) {
    this.userService.create(this.model)
      .subscribe(
          data => {
              this.router.navigate(['/login']);
          },
          error => {
              this.isHidden = false;
              this.hasError = true;
              this.loading = false;
          });
          }
          }
          }
