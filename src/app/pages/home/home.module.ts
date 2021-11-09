import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { OrganiserModule } from './organiser/organiser.module';
import { BudgetPlannerModule } from './budget-planner/budget-planner.module';
import { HomeComponent } from './home/home.component';

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
