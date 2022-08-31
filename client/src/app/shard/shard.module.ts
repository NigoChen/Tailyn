import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { BootstrapModule } from '../bootstrap/bootstrap.module';
import { LoadingComponent } from '../components/loading/loading.component';
import { ErrorComponent } from '../components/error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    LoadingComponent,
    ErrorComponent,
  ],
  // imports: [
  //   CommonModule
  // ],
  exports: [
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    BootstrapModule,
    LoadingComponent,
    ErrorComponent,
  ]
})
export class ShardModule { }
