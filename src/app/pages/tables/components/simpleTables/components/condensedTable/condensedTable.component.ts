import {Component} from '@angular/core';

import {SimpleTablesService} from '../../simpleTables.service';

@Component({
  selector: 'condensed-table',
  template: require('./condensedTable.html')
})
export class CondensedTable {

  peopleTableData:Array<any>;

  constructor(private _simpleTablesService: SimpleTablesService) {
    this.peopleTableData = _simpleTablesService.peopleTableData;
  }
}
