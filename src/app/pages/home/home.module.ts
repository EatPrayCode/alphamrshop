import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { BudgetPlannerModule } from '../../features/home/budget-planner/budget-planner.module';
import { HomeComponent } from 'src/app/pages/home/home/home.component';
import { OrganiserModule } from 'src/app/features/home/organiser/organiser.module';

export const routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    OrganiserModule,
    BudgetPlannerModule
  ]
})
export class HomeModule { }
