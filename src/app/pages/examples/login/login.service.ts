import { Injectable } from '@angular/core';
import { User } from './user';
import { USERS } from './mock-users';
import { Router } from '@angular/router';

import { routing } from '../../../app.routing';


@Injectable()
export class LoginService {

  constructor(public router: Router) {
  }

  getUsers() {
    return Promise.resolve(USERS);
  }

  model = new User('', '', false);


  authenticate() {
    for (let userIdx in USERS) {
      let user = USERS[userIdx];
      if (user.username === this.model.username && user.password === this.model.password) {
        this.router.navigate(['dashboard']);
      }
    }

    return false;
  }


  log() {
    console.log(this.model);
  }



}
