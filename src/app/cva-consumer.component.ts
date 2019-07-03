import { Component, forwardRef, OnDestroy } from '@angular/core';
import { ControlValueAccessor, FormArray, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validator } from '@angular/forms';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { TemplateFormContent } from './template-form.component';

type ContentArray = TemplateFormContent[]

@Component({
  selector: 'cva-consumer',
  templateUrl: './cva-consumer.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CvaConsumerComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CvaConsumerComponent),
      multi: true,
    }
  ]
})
export class CvaConsumerComponent implements ControlValueAccessor, Validator {
  readonly internalForm = new FormArray([new FormControl()]);
  private onChange = (change: ContentArray) => { };

  constructor() {
    this.internalForm.valueChanges
      .subscribe(change => this.onChange(change));
  }

  writeValue(model: ContentArray | null) {
    if (model) {
      this.internalForm.clear();
      model.forEach(
        content => this.internalForm.push(new FormControl(content)));
    }
  }
  registerOnChange(onChange: (model: ContentArray) => void) {
    this.onChange = onChange;
  }
  registerOnTouched(onTouched: (model: ContentArray) => void) { }
  validate(c: FormControl) {
    return this.internalForm.valid ? null : { cvaConsumerError: true };
  }
}
