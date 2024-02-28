import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';   
@Component({
  selector: 'app-login',    
  templateUrl: './login.component.html', 
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  applyForm: FormGroup;
  imageUrl = '../../../assets/images/login-image.jpg';
  constructor(private fb: FormBuilder) {
    this.applyForm = this.fb.group({
      email: [''],
      password: [''],
    });
  }

  ngOnInit() {

  }

  onSubmit() { 
    console.log(this.applyForm.value); 
  }

}
