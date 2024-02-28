import { NgModule } from '@angular/core';    
import { CustomButtonComponent } from './custom-button.component';  
import { CommonModule } from '@angular/common';
 
@NgModule({
  imports: [
    CommonModule, 
  ],
  declarations: [
    CustomButtonComponent
  ],
  exports: [
    CustomButtonComponent
  ]
})
export class CustomButtonModule { } 