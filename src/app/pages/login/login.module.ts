import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { CustomInputModule } from '../../components/custom-input/custom-input.module';
import { CustomButtonModule } from '../../components/custom-button/custom-button.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomInputModule,
    CustomButtonModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
