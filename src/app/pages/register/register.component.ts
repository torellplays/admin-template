import {Component, ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../theme/services/UserService/user.service';


@Component({
  selector: 'register',
  providers: [UserService],
  encapsulation: ViewEncapsulation.None,
  // styles: [require('./register.scss')],
  template: require('./register.html')
})
export class Register {

  model: any = {};
  isHidden = true;
  hasError = false;
  loading = false;

  constructor(
    private router: Router,
    private userService: UserService,
    ) { }


  register() {
    this.loading = true;
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
