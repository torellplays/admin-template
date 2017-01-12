import { Injectable } from '@angular/core';
import { User } from './user';
import { USERS } from './mock-users';
import { Router } from '@angular/router';

import { routing } from '../../../app.routing';


@Injectable()
export class LoginService {

  constructor(public router: Router) {
  }

isHasError = false;


getUsers() {
    return Promise.resolve(USERS);
    }

model = new User('', '', false);


onSubmit() {
  for (let userIdx in USERS) {
    let user = USERS[userIdx];
    if (user.username === this.model.username && user.password === this.model.password) {
      this.router.navigate(['dashboard']);
    }
  }

  this.model.authErrors = true;
  this.isHasError = true;
}


log() {
  console.log(this.model);
}



}
