import { RouterModule } from '@angular/router';
import { PacksComponent } from '../packs/packs.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { PacksModule } from '../packs/packs.module';
import { StoreComponent } from './store/store.component';

export const routes = [
  { path: '', component: StoreComponent, pathMatch: 'full' },
  { path: ':id', component: StoreComponent }
];

@NgModule({
  declarations: [
    StoreComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    PacksModule
  ],
})
export class StoreModule { }
