import { PagesComponent } from './pages/pages.component';
import { AuthModule } from './../core/auth/auth.module';
import { CustomisePackModule } from '../features/customise-pack/customise-pack.module';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from 'src/app/shared/shared.module';
import { BlankComponent } from './blank/blank.component';

@NgModule({
  declarations: [
    BlankComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    AuthModule,
    CustomisePackModule
  ],
  exports: []
})
export class LayoutsModule { }
