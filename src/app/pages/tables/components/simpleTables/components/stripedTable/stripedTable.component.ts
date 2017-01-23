import {Component} from '@angular/core';

import {SimpleTablesService} from '../../simpleTables.service';

@Component({
  selector: 'striped-table',
  template: require('./stripedTable.html')
})
export class StripedTable {

  smartTableData:Array<any>;

  constructor(private _simpleTablesService: SimpleTablesService) {
    this.smartTableData = _simpleTablesService.smartTableData;
  }
}
