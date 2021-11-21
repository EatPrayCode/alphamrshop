import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { BudgetPlannerComponent } from './budget-planner.component';

@NgModule({
  declarations: [
    BudgetPlannerComponent
  ],
  exports: [
    BudgetPlannerComponent, 
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class BudgetPlannerModule { }
