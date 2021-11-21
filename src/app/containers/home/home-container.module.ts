import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { HomeModule } from 'src/app/features/home/home.module';

import { HomeContainerComponent } from './home-container/home-container.component';

export const routes = [
  {
    path: '', component: HomeContainerComponent, pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    HomeContainerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    HomeModule
  ]
})
export class HomeContainerModule { }
