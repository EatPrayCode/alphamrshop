import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacksModule } from '../../features/packs/packs.module';
import { InvestmentsComponent } from './investments/investments.component';

export const routes = [
  { path: '', component: InvestmentsComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    InvestmentsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PacksModule,
  ]
})
export class InvestmentsModule { }
