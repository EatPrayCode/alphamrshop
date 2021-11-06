import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LandingComponent } from './landing.component'; 
 
export const routes = [
  { path: '', component: LandingComponent, pathMatch: 'full'  }
];

@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LandingModule { }
