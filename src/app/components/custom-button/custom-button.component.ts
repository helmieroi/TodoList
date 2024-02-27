import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [],
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.css'
})
export class CustomButtonComponent implements OnInit {
constructor() { }
ngOnInit(): void {
} 
@Input() label: string = "Validate";
@Input() type: string = 'button'; 
@Input() class : string = "btn btn-outline-success me-2";
}
