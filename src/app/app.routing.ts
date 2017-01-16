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
import { LoginComponent } from './pages/examples/login/login/login.component';
import { RegisterComponent } from './pages/examples/login/register/index';

import { AuthGuard } from './pages/examples/login/_guards/auth.guard';




const routes: Routes = [
{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]  },
{ path: 'dashboard2', component: Dashboard2Component, canActivate: [AuthGuard]  },
{ path: 'widgets', component: WidgetsComponent, canActivate: [AuthGuard] },
{ path: 'datatables', component: DataTablesComponent, canActivate: [AuthGuard] },
{ path: 'simpletables', component: SimpleTablesComponent, canActivate: [AuthGuard]  },
{ path: 'top-nav', component: TopNavComponent, canActivate: [AuthGuard]  },
{ path: 'boxed', component: BoxedComponent, canActivate: [AuthGuard]  },
{ path: 'fixed', component: FixedComponent, canActivate: [AuthGuard]  },
{ path: 'collapsed-sidebar', component: CollapsedSidebarComponent, canActivate: [AuthGuard]  },
{ path: 'chartjs', component: ChartjsComponent, canActivate: [AuthGuard]  },
{ path: 'morris', component: MorrisComponent, canActivate: [AuthGuard]  },
{ path: 'flot', component: FlotComponent, canActivate: [AuthGuard]  },
{ path: 'inline', component: InlineComponent, canActivate: [AuthGuard] },
{ path: 'login', component: LoginComponent},
{ path: 'register', component: RegisterComponent },
{ path: '' , redirectTo: '/dashboard', pathMatch: 'full' }

];

export const routing = RouterModule.forRoot(routes);
