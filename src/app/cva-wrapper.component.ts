import { Component, forwardRef, ViewChild, AfterViewInit } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validator } from '@angular/forms';
import { TemplateFormComponent, TemplateFormContent } from './template-form.component';

@Component({
  selector: 'cva-wrapper',
  templateUrl: './cva-wrapper.component.html',
  // providers: [
  //   {
  //     provide: NG_VALUE_ACCESSOR,
  //     useExisting: forwardRef(() => CvaWrapperComponent),
  //     multi: true,
  //   },
  //   {
  //     provide: NG_VALIDATORS,
  //     useExisting: forwardRef(() => CvaWrapperComponent),
  //     multi: true,
  //   }
  // ]
})
export class CvaWrapperComponent {
  // @ViewChild('templateForm', { static: false }) templateContentForm?: TemplateFormComponent;
  content: TemplateFormContent = { imageUrl: '', title: '' };

  // internalForm?: FormGroup;
  // private onChange = (change: TemplateFormContent) => { };

  // ngAfterViewInit() {
  //   if (this.templateContentForm) {
  //     this.internalForm = this.templateContentForm.contentForm.form
  //   }
  //   if (this.internalForm) {
  //     this.internalForm.valueChanges.subscribe(change => this.onChange(change));
  //   }
  // }

  // registerOnChange(onChange: (model: TemplateFormContent) => void) {
  //   this.onChange = onChange;
  // }
  // registerOnTouched(fn: () => void) { }
  // writeValue(model: TemplateFormContent | null) { }
  // validate(c: FormControl) {
  //   if (this.internalForm) {
  //     if (this.internalForm.valid) {
  //       return null;
  //     }
  //     return { cvaWrapperError: true };
  //   }
  //   return null;
  // }

}
