import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { OrganiserComponent } from './organiser.component';

@NgModule({
  declarations: [
    OrganiserComponent
  ],
  exports: [
    OrganiserComponent, 
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class OrganiserModule { }
