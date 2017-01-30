import {Component, ViewEncapsulation, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { User } from '../../models/index';
import { UserService } from '../../services';

@Component({
  selector: 'user-panel',
  encapsulation: ViewEncapsulation.None,
  template: require('./userPanel.html')
})
export class UserPanel implements OnInit{
  currentUser: User;
  users: User[] = [];

  constructor(private userService: UserService) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
     this.loadAllUsers();
     }

 private loadAllUsers() {
       this.userService.getAll().subscribe(users => { this.users = users; });
       }

    }
