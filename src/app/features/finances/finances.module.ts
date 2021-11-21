import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacksModule } from '../packs/packs.module';
import { FinancesComponent } from './finances/finances.component';

@NgModule({
  declarations: [
    FinancesComponent,
  ],
  imports: [
    CommonModule,
    PacksModule,
  ],
  exports: [
    CommonModule,
    PacksModule,
    FinancesComponent
  ]
})
export class FinancesModule { }
