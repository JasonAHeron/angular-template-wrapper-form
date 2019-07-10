import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable, of, } from 'rxjs';
import { delay } from 'rxjs/operators';

@Directive({
  selector: '[asyncValidator][ngModel]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: MyAsyncValidator,
    multi: true,
  }]
})
export class MyAsyncValidator implements AsyncValidator {

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return of(null).pipe(delay(2000));
  }
}