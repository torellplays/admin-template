import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Dashboard2Component } from './pages/dashboard/dashboard2.component';
import { WidgetsComponent } from './pages/widgets.component';
import { DataTablesComponent } from './pages/tables/data-tables.component';
import { SimpleTablesComponent } from './pages/tables/simple-tables.component';
import { TopNavComponent } from './pages/layout/top-nav.component';
import { BoxedComponent } from './pages/layout/boxed.component';
import { FixedComponent } from './pages/layout/fixed.component';
import { CollapsedSidebarComponent } from './pages/layout/collapsed-sidebar.component';
import { ChartjsComponent } from './pages/charts/chartjs.component';
import { MorrisComponent } from './pages/charts/morris.component';
import { FlotComponent } from './pages/charts/flot.component';
import { InlineComponent } from './pages/charts/inline.component';


const routes: Routes = [
{ path: 'dashboard', component: DashboardComponent },
{ path: 'dashboard2', component: Dashboard2Component },
{ path: 'widgets', component: WidgetsComponent },
{ path: 'datatables', component: DataTablesComponent },
{ path: 'simpletables', component: SimpleTablesComponent },
{ path: 'top-nav', component: TopNavComponent },
{ path: 'boxed', component: BoxedComponent },
{ path: 'fixed', component: FixedComponent },
{ path: 'collapsed-sidebar', component: CollapsedSidebarComponent },
{ path: 'chartjs', component: ChartjsComponent },
{ path: 'morris', component: MorrisComponent },
{ path: 'flot', component: FlotComponent },
{ path: 'inline', component: InlineComponent },
{ path: '' , redirectTo: '/dashboard', pathMatch: 'full' }

];

export const routing = RouterModule.forRoot(routes);
