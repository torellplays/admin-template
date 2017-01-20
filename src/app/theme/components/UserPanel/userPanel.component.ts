import {Component, ViewEncapsulation, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'user-panel',
  encapsulation: ViewEncapsulation.None,
  //styles: [require('./baMenuItem.scss')],
  template: require('./userPanel.html')
})
export class UserPanel {
}
