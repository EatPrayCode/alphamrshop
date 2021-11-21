import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

import { FinancesModule } from './../../features/finances/finances.module';
import { FinancesContainerComponent } from './finances-container/finances-container.component';

export const routes = [
  {
    path: '', component: FinancesContainerComponent, pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    FinancesContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FinancesModule
  ]
})
export class FinancesContainerModule { }
