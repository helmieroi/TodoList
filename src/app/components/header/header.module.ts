import { NgModule } from '@angular/core';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header.component';  
import { CommonModule } from '@angular/common';
import { NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
 
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,NgbNavModule, NgbDropdownModule,
    FormsModule
  ], 
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { } 