import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { RepairComponent } from './repair/repair.component';
import { WorkComponent } from './work/work.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'Employee', component: EmployeeComponent },
  { path: 'Repair', component: RepairComponent },
  { path: 'Work', component: WorkComponent },
  { path: 'Tutorial', component: TutorialComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [
    // CommonModule, // 針對export components 對外使用
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
