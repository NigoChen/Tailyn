import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './auth/auth-guard.guard';
import { ChildGuard } from './auth/child.guard';
import { LeaveGuard } from './auth/leave.guard';

const routes: Routes = [
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  {
    path: 'Login',
    component: LoginComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Tailyn',
    component: DashboardComponent,
    canActivateChild: [ChildGuard],
    canDeactivate:[LeaveGuard],
    loadChildren: () => import('./components/dashboard.module').then(m => m.DashboardModule)
  },
  { path: '**', component: ErrorComponent }
];

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled',
  scrollOffset: [0, 0],
  // ...any other options you'd like to use
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
