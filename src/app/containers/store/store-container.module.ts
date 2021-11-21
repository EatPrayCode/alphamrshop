import { StoreModule } from '../../features/store/store.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreContainerComponent } from './store-container/store-container.component';

export const routes = [
  { path: '', component: StoreContainerComponent, pathMatch: 'full' },
  { path: ':id', component: StoreContainerComponent }
];

@NgModule({
  declarations: [
    StoreContainerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    StoreModule
  ]
})
export class StoreContainerModule { }
