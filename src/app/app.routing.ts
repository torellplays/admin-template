import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Dashboard2Component } from './pages/dashboard/dashboard2.component';
import { WidgetsComponent } from './pages/widgets.component';
import { DataTablesComponent } from './pages/tables/data-tables.component';
import { SimpleTablesComponent } from './pages/tables/simple-tables.component';
import { TopNavComponent } from './pages/layout/top-nav.component';

const routes: Routes = [
{ path: 'dashboard', component: DashboardComponent },
{ path: 'dashboard2', component: Dashboard2Component },
{ path: 'widgets', component: WidgetsComponent },
{ path: 'datatables', component: DataTablesComponent },
{ path: 'simpletables', component: SimpleTablesComponent },
{ path: 'top-nav', component: TopNavComponent },
{ path: '' , redirectTo: '/dashboard', pathMatch: 'full' }

];

export const routing = RouterModule.forRoot(routes);
