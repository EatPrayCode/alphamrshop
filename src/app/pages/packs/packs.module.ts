import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { PacksComponent } from './packs.component';

@NgModule({
  declarations: [
    PacksComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    PacksComponent
  ],
})
export class PacksModule { }
