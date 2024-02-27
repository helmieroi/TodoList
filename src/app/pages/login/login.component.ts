import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup,ReactiveFormsModule, Validators } from '@angular/forms'; 
import { CustomButtonComponent } from '../../components/custom-button/custom-button.component';
import { CustomInputComponent } from '../../components/custom-input/custom-input.component';


@Component({
  selector: 'app-login',  
  standalone: true,
  imports: [ReactiveFormsModule,CustomButtonComponent,CustomInputComponent], 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginComponent {

  applyForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
  
  }
  onSubmit() {
 
      console.log(this.applyForm.value);
 
    
  }
}
