import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './theme/guards/index';

export const routes: Routes = [
  { path: '', redirectTo: 'pages', pathMatch: 'full', canActivate: [AuthGuard]},
  { path: '**', redirectTo: 'pages/dashboard', canActivate: [AuthGuard]}
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
