import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import { User } from '../../models/index';
import { UserService } from '../../services';
import {GlobalState} from '../../../global.state';

@Component({
  selector: 'ba-page-top',
  //styles: [require('./baPageTop.scss')],
  providers: [UserService, User],
  template: require('./baPageTop.html'),
  encapsulation: ViewEncapsulation.None
})
export class BaPageTop implements OnInit{

  currentUser: User;
  users: User[] = [];
  public isScrolled:boolean = false;
  public isMenuCollapsed:boolean = false;

  constructor(private userService: UserService, private _state: GlobalState) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
          this.isMenuCollapsed = isCollapsed;
        });
  }

  ngOnInit() {
       this.loadAllUsers();
   }

   private loadAllUsers() {
         this.userService.getAll().subscribe(users => { this.users = users; });
   }


  public toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    return false;
  }

  public scrolledChanged(isScrolled) {
    this.isScrolled = isScrolled;
  }
}
