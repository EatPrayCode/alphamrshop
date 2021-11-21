import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CustomisePackModule } from '../customise-pack/customise-pack.module';

@NgModule({
  declarations: [
    CheckoutComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    CustomisePackModule
  ],
  exports: [
    CheckoutComponent,
    CustomisePackModule
  ],
})
export class CheckoutModule { }

// https://codepen.io/onur-yuksekkaya/pen/eYBXOzM
