import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { BootstrapModule } from '../bootstrap/bootstrap.module';
import { LoadingComponent } from '../components/loading/loading.component';
import { HttpClientModule } from '@angular/common/http';
import { AlertComponent } from '../components/alert/alert.component';
import { AlertsDirective } from '../directives/alerts.directive';
import { BootstrapModule } from '../bootstrap/bootstrap.module';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from '../helps/error.interceptor';

@NgModule({
  declarations: [
    LoadingComponent,    
    AlertComponent,
    AlertsDirective
  ],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    // HttpClientModule,
    FormsModule,
    BootstrapModule
  ],
  exports: [
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BootstrapModule,
    LoadingComponent,
    AlertComponent,
    AlertsDirective
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
})
export class ShardModule { }
