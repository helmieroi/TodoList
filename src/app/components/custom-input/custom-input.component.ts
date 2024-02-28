import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css'], // Use styleUrls instead of styleUrl
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true
    }
  ],
})
export class CustomInputComponent implements ControlValueAccessor{
  @Input() classRoot: string = 'root';
  @Input() error: boolean = false;
  @Input() labelId: string = 'default-label-id';
  @Input() labelClass: string = 'label-root';
  @Input() name: string = 'custom-input';
  @Input() label: string = 'label-input';
  @Input() type: string = 'text';
  @Input() class: string = 'input-root';
  @Input() value: string = '';
  @Input() required: boolean = false;
  @Input() id: string = 'default-input-id';
  @Input() placeholder: string = '';
  @Input() formControlName: any = '';
  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Implement if needed
  }

  // Called when input value changes
  handleChange(event: any): void {
    this.onChange(event.target.value);
    this.onTouched();
  }
}
