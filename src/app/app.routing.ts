import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Dashboard2Component } from './pages/dashboard/dashboard2.component';
import { WidgetsComponent } from './pages/widgets.component';

const routes: Routes = [
{ path: 'dashboard', component: DashboardComponent },
{ path: 'dashboard2', component: Dashboard2Component },
{ path: 'widgets', component: WidgetsComponent },
{ path: '' , redirectTo: '/dashboard', pathMatch: 'full' }

];

export const routing = RouterModule.forRoot(routes);
