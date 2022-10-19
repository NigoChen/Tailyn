import { NgModule } from '@angular/core';
import { ModalComponent } from './modal/modal.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { RepairComponent } from './repair/repair.component';
import { WorkComponent } from './work/work.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ShardModule } from '../shard/shard.module';
// import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import { ErrorInterceptor } from '../helps/error.interceptor';
import { EmployeeService } from '../services/employee.service';
import { CommonModule } from '@angular/common';
import { ChildGuard } from '../auth/child.guard';
import { ErrorComponent } from './error/error.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { ContentHeaderComponent } from './content-header/content-header.component';
import { FooterComponent } from './footer/footer.component';
import { WorkHoursService } from '../services/work-hours.service';
import { ClientService } from '../services/client.service';
import { SplitePipe } from '../pipes/splite.pipe';
import { RepairService } from '../services/repair.service';

@NgModule({
  declarations: [
    ModalComponent,
    DashboardComponent,
    HomeComponent,
    EmployeeComponent,
    TutorialComponent,
    RepairComponent,
    WorkComponent,
    ErrorComponent,
    SidebarComponent,
    FooterComponent,
    ContentHeaderComponent,
    HeaderComponent,
    SplitePipe
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ShardModule
  ],
  exports: [],
  providers: [
    ChildGuard,
    EmployeeService,
    WorkHoursService,
    RepairService,
    ClientService,
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
})
export class DashboardModule { }
