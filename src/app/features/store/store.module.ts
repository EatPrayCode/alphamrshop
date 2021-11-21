import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { PacksModule } from '../packs/packs.module';
import { StoreComponent } from './store/store.component';

@NgModule({
  declarations: [
    StoreComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PacksModule
  ],
  exports: [
    CommonModule,
    SharedModule,
    PacksModule,
    StoreComponent
  ],
})
export class StoreModule { }
