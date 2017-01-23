import { Routes, RouterModule }  from '@angular/router';

import { Tables } from './tables.component';
import { SimpleTables } from './components/simpleTables/simpleTables.component';
import { DataTables } from './components/dataTables/dataTables.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Tables,
    children: [
      { path: 'simpletables', component: SimpleTables },
      { path: 'datatables', component: DataTables }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
