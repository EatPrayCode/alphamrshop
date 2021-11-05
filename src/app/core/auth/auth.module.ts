import { SigninMobileComponent } from './components/signin-mobile/signin-mobile.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './components/signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChooseAppSettingsModalComponent } from './components/choose-app-settings-modal/choose-app-settings-modal.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SignUpComponent } from './components/sign-up/sign-up.component';

@NgModule({
  declarations: [
    SigninComponent,
    SigninMobileComponent,
    ChooseAppSettingsModalComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    SigninComponent,
    SigninMobileComponent,
    ChooseAppSettingsModalComponent
  ]
})
export class AuthModule { }
