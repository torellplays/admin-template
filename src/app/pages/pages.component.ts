import {Component, ViewEncapsulation} from '@angular/core';
import { GlobalState } from '../global.state';
import { BaMenuService } from '../theme';


@Component({
  selector: 'pages',
  encapsulation: ViewEncapsulation.None,
  styles: [require('../../assets/dist/css/skins/_all-skins.min.css')],
  template: `
    <body [ngClass]="{'skin-blue sidebar-mini': 1, 'sidebar-collapse sidebar-open': isMenuCollapsed}">
      <ba-sidebar></ba-sidebar>
      <ba-page-top></ba-page-top>
    <!-- <div class="al-main">
    //  <div class="al-content">
    //    <ba-content-top></ba-content-top> -->
        <router-outlet></router-outlet>
  <!--  //  </div>
  //  </div>
  <ba-back-top position="200"></ba-back-top> -->
<baFooter></baFooter>
  </body>
    `
})
export class Pages {

  isMenuCollapsed: boolean = false;

  constructor(private _state: GlobalState,
              private _menuService: BaMenuService,
              ) {


    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }

  ngOnInit() {
  }
}
