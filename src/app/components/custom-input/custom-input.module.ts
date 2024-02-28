import { NgModule } from '@angular/core';   
import { ReactiveFormsModule} from '@angular/forms';
import { CustomInputComponent } from './custom-input.component';  
import { CommonModule } from '@angular/common';
 
@NgModule({
  imports: [
    CommonModule, 
     ReactiveFormsModule
  ],
  declarations: [
    CustomInputComponent
  ],
  exports: [
    CustomInputComponent
  ]
})
export class CustomInputModule { } 