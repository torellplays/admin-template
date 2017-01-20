import {Component, ViewEncapsulation, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'user-panel',
  encapsulation: ViewEncapsulation.None,
  //styles: [require('./baMenuItem.scss')],
  template: require('./user-panel.html')
})
export class UserPanel {
}
