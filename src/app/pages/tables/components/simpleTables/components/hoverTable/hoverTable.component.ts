import {Component} from '@angular/core';

import {SimpleTablesService} from '../../simpleTables.service';

@Component({
  selector: 'hover-table',
  template: require('./hoverTable.html')
})
export class HoverTable {

  metricsTableData:Array<any>;

  constructor(private _simpleTablesService: SimpleTablesService) {
    this.metricsTableData = _simpleTablesService.metricsTableData;
  }
}
