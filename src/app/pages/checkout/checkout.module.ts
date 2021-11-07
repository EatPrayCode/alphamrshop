import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CustomisePackModule } from '../customise-pack/customise-pack.module';

export const routes = [
  { path: '', component: CheckoutComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    CheckoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    CustomisePackModule
  ],
  exports: [
    CheckoutComponent,
  ],
})
export class CheckoutModule { }

// https://codepen.io/onur-yuksekkaya/pen/eYBXOzM