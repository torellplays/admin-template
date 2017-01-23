import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'simple-tables',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./simpleTables.scss')],
  template: require('./simpleTables.html')
})
export class SimpleTables {

  constructor() {
  }
}
