import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomiseItemsTableComponent } from './components/customise-items-table/customise-items-table.component';
import { CustomisePackComponent } from './components/customise-pack/customise-pack.component';
import { ViewEditPackComponent } from './components/view-edit-pack/view-edit-pack.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    CustomisePackComponent,
    CustomiseItemsTableComponent,
    ViewEditPackComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    CustomisePackComponent,
    CustomiseItemsTableComponent,
    ViewEditPackComponent
  ],
  entryComponents:[
    ViewEditPackComponent
  ]
})
export class CustomisePackModule { }
