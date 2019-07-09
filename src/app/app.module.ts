import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { CvaWrapperComponent } from './cva-wrapper.component';
import { TemplateFormComponent } from './template-form.component';
import { CvaConsumerComponent } from './cva-consumer.component';
import { SquareImageValidator , ImageLoaderService} from './asyncValidator';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ CvaWrapperComponent, TemplateFormComponent, CvaConsumerComponent, SquareImageValidator ],
  bootstrap:    [ CvaConsumerComponent ],
  providers: [ImageLoaderService],
})
export class AppModule { }
