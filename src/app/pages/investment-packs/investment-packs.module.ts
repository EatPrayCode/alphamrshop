import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestmentPacksComponent } from './components/investment-packs/investment-packs.component';

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
  ]
})
export class InvestmentPacksModule { }
