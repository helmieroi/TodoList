import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import {FormControl, FormGroup,ReactiveFormsModule } from '@angular/forms'; 
import { CustomButtonComponent } from '../../components/custom-button/custom-button.component';


@Component({
  selector: 'app-login',  
  standalone: true,
  imports: [ReactiveFormsModule,CustomButtonComponent], 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginComponent {

  applyForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit() {
 
      console.log(this.applyForm.value);
 
    
  }
}
