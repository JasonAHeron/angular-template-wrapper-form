import { Component, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

export interface TemplateFormContent {
  imageUrl: string;
  title: string;
}

@Component({
  selector: 'template-form',
  templateUrl: './template-form.component.html'
})
export class TemplateFormComponent {
  @Input() content!: TemplateFormContent;
  @ViewChild(NgForm, { static: false }) contentForm?: NgForm;
}
