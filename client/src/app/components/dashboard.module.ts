import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ModalComponent } from './modal/modal.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { RepairComponent } from './repair/repair.component';
import { WorkComponent } from './work/work.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ShardModule } from '../shard/shard.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from '../helps/error.interceptor';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EmployeeService } from '../services/employee.service';
import { CommonModule } from '@angular/common';
import { ChildGuard } from '../auth/child.guard';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    ModalComponent,
    DashboardComponent,
    HomeComponent,
    EmployeeComponent,
    TutorialComponent,
    RepairComponent,
    WorkComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ShardModule
  ],
  exports: [
    
  ],
  providers: [
    ChildGuard,
    EmployeeService,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
})
export class DashboardModule { }
