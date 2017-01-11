import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'dashboard',
  encapsulation: ViewEncapsulation.None,
  template: require('./dashboard.component.html')
})
export class DashboardComponent {
  title = 'AdminLTE 2 | Dashboard';
}
