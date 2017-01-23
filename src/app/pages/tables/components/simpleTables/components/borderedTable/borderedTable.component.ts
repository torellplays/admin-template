import {Component} from '@angular/core';

import {SimpleTablesService} from '../../simpleTables.service';

@Component({
  selector: 'bordered-table',
  template: require('./borderedTable.html'),
})
export class BorderedTable {

  metricsTableData:Array<any>;

  constructor(private _simpleTablesService: SimpleTablesService) {
    this.metricsTableData = _simpleTablesService.metricsTableData;
  }
}
