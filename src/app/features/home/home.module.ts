import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetPlannerModule } from './budget-planner/budget-planner.module';
import { OrganiserModule } from './organiser/organiser.module';

import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    OrganiserModule,
    BudgetPlannerModule
  ],
  exports: [
    OrganiserModule,
    BudgetPlannerModule,
    HomeComponent
  ]
})
export class HomeModule { }
