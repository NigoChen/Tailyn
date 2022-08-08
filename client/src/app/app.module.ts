import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Http
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { BootstrapModule } from './bootstrap/bootstrap.module';
import { EmployeeComponent } from './components/employee/employee.component';
import { FooterComponent } from './components/footer/footer.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RepairComponent } from './components/repair/repair.component';
import { WorkComponent } from './components/work/work.component';
import { ErrorInterceptor } from './helps/error.interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorComponent,
    LoginComponent,
    HomeComponent,
    EmployeeComponent,
    FooterComponent,
    TutorialComponent,
    DashboardComponent,
    RepairComponent,
    WorkComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BootstrapModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
