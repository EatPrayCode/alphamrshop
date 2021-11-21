import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckoutModule } from '../../features/checkout/checkout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';

import { CheckoutContainerComponent } from './checkout-container/checkout-container.component';

export const routes = [
  {
    path: '', component: CheckoutContainerComponent, pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    CheckoutContainerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    CheckoutModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CheckoutContainerModule { }
