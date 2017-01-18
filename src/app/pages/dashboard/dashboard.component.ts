import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'dashboard',
  encapsulation: ViewEncapsulation.None,
  // styles: [String(require('../../../assets/bootstrap/css/bootstrap.min.css'),
  //         require('../../../assets/dist/css/AdminLTE.min.css'))]
  template: require('./dashboard.html')
})
export class Dashboard {

  constructor() {
  }

}
