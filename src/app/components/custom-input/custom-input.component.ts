import { Component, EventEmitter, Input, NgModule, forwardRef } from '@angular/core';
import { FormControl, Validators,ReactiveFormsModule, ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule  } from '@angular/forms';

 
@Component({
  selector: 'app-custom-input',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.css', 
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true,
    },
  ],
 
})
export class CustomInputComponent implements ControlValueAccessor {
  @Input() classRoot :string = 'root';
  @Input() error :boolean = false;
  @Input() labelId :string = 'default-label-id';
  @Input() labelClass :string = 'label-root';
  @Input() name :string = 'custom-input';
  @Input() label :string = 'label-input';
  @Input() type :string = 'text';
  @Input() class :string = 'input-root';
  @Input() value :string = '';
  @Input() required :boolean = false;
  @Input() id :string = 'default-input-id'; 
  @Input() formControlName: string = '';

 // Implement ControlValueAccessor methods
 onChange: any = () => {};
 onTouched: any = () => {};

 writeValue(value: any) {}
 registerOnChange(fn: any) {
   this.onChange = fn;
 }
 registerOnTouched(fn: any) {
   this.onTouched = fn;
 }
}
   