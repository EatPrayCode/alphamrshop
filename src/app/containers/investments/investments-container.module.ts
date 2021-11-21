import { InvestmentsContainerComponent } from './investments-container/investments-container.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestmentsModule } from 'src/app/features/investments/investments.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

export const routes = [
  {
    path: '', component: InvestmentsContainerComponent, pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    InvestmentsContainerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    InvestmentsModule
  ]
})
export class InvestmentsContainerModule { }
