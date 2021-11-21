import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacksModule } from '../packs/packs.module';

import { InvestmentsComponent } from './investments/investments.component';

@NgModule({
  declarations: [
    InvestmentsComponent,
  ],
  imports: [
    CommonModule,
    PacksModule,
  ],
  exports: [
    CommonModule,
    PacksModule,
    InvestmentsComponent
  ]
})
export class InvestmentsModule { }
