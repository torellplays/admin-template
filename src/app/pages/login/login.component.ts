import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { AuthenticationService } from '../../theme/services/AuthenticationService';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'login',
  providers: [AuthenticationService],
  encapsulation: ViewEncapsulation.None,
  //styles: [require('./login.scss')],
  template: require('./login.html')
})
export class Login {
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService
      ) { }


        isHidden = true;
        hasError = false;

        ngOnInit() {
          // reset login status
            this.authenticationService.logout();

            // get return url from route parameters or default to '/'
            this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
            }

            login() {
            this.loading = true;
            this.authenticationService.login(this.model.email, this.model.password)
              .subscribe(
                  data => {
                    this.router.navigate([this.returnUrl]);
                  },
                  error => {
                    this.isHidden = false;
                    this.hasError = true;
                    this.loading = false;
                    });
                    }
        }
