import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestmentPacksComponent } from './investment-packs/investment-packs.component';
import { PacksModule } from '../packs/packs.module';

export const routes = [
  { path: '', component: InvestmentPacksComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    InvestmentPacksComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PacksModule,
  ]
})
export class InvestmentPacksModule { }
