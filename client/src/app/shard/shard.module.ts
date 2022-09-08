import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { BootstrapModule } from '../bootstrap/bootstrap.module';
import { LoadingComponent } from '../components/loading/loading.component';
import { ContentHeaderComponent } from '../components/content-header/content-header.component';
import { ErrorComponent } from '../components/error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    LoadingComponent,
    ErrorComponent,
    ContentHeaderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    // BootstrapModule
  ],
  exports: [
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    // BootstrapModule,

    LoadingComponent,
    ContentHeaderComponent,
    ErrorComponent,
  ]
})
export class ShardModule { }
