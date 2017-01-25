import {Component, ViewEncapsulation} from '@angular/core';
@Component({
  selector: 'pages',
  encapsulation: ViewEncapsulation.None,
  styles: [require('../../assets/dist/css/skins/_all-skins.min.css')],
  template: `
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
    `
})
export class Pages {

  constructor() {
  }

  ngOnInit() {
  }
}
