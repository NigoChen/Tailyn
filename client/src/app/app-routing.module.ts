import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';
import { RepairComponent } from './components/repair/repair.component';
import { WorkComponent } from './components/work/work.component';
import { AuthGuard } from './auth/auth-guard.guard';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent,
  canActivate: [AuthGuard]
},
  {
    path: 'Tailyn', component: DashboardComponent,
    // canActivateChild: [ChildGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'employee', component: EmployeeComponent },
      { path: 'repair', component: RepairComponent },
      { path: 'work', component: WorkComponent },
      { path: 'tutorial', component: TutorialComponent },
      { path: '**', component: ErrorComponent }
    ]
  },
  { path: '**', component: ErrorComponent }
];

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  // ...any other options you'd like to use
};

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
