import { LandingModule } from '../../features/landing/landing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { LandingContainerComponent } from './landing-container/landing-container.component';

export const routes = [
  {
    path: '', component: LandingContainerComponent, pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    LandingContainerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    LandingModule
  ]
})
export class LandingContainerModule { }
