import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing }       from './tables.routing';
import { Tables } from './tables.component';
import { SimpleTables } from './components/simpleTables/simpleTables.component';
import { DataTables } from './components/dataTables/dataTables.component';
import { Ng2SmartTableModule } from '../../theme/components/ng2-smart-table/';
import { SimpleTablesService } from './components/simpleTables/simpleTables.service';
import { ResponsiveTable } from './components/simpleTables/components/responsiveTable';
import { StripedTable } from './components/simpleTables/components/stripedTable';
import { BorderedTable } from './components/simpleTables/components/borderedTable';
import { HoverTable } from './components/simpleTables/components/hoverTable';
import { CondensedTable } from './components/simpleTables/components/condensedTable';
import { ContextualTable } from './components/simpleTables/components/contextualTable';
import { DataTablesService } from './components/dataTables/dataTables.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    Ng2SmartTableModule,
    routing
  ],
  declarations: [
    Tables,
    SimpleTables,
    DataTables,
    HoverTable,
    BorderedTable,
    CondensedTable,
    StripedTable,
    ContextualTable,
    ResponsiveTable
  ],
  providers: [
    SimpleTablesService,
    DataTablesService
  ]
})
export default class TablesModule {}
