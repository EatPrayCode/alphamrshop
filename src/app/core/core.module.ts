import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FirebaseModule } from './firebase/firebase.module';
import { NgModule } from '@angular/core';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [],
  imports: [
    AuthModule,
    FirebaseModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [
    FormsModule,
    HttpClientModule,
    AuthModule,
    FirebaseModule
  ]
})
export class CoreModule { }
