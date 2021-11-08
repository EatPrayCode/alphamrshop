import { PacksComponent } from './components/packs/packs.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

export const routes = [
  { path: '', component: PacksComponent, pathMatch: 'full' },
  { path: ':id', component: PacksComponent }
];

@NgModule({
  declarations: [
    PacksComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class StoreModule { }
