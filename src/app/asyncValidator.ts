import {Directive, Injectable} from '@angular/core';
import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors} from '@angular/forms';
import {Observable, of, Subject} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

/** Image Dimesions */
export interface Dimensions {
  width: number;
  height: number;
}

/** An angular service that returns image dimensions from an url */
@Injectable()
export class ImageLoaderService {
  /*
   * A method that loads an image from a url & returns its dimensions as an
   * observable
   */
  loadImageDimensions(url: string): Observable<Dimensions> {
    const img = new Image();
    const subject = new Subject<Dimensions>();
    img.onload = () => {
      const {width, height} = img;
      subject.next({width, height});
      subject.complete();
    };

    img.onerror = (err) => {
      subject.error(err);
    };
    img.src=url;
    return subject;
  }
}


/**
 * A validator to validate whether has square-like dimensions
 */
@Directive({
  selector: '[validSquareImage][ngModel]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: SquareImageValidator,
    multi: true,
  }]
})
export class SquareImageValidator implements AsyncValidator {
  constructor(private readonly loader: ImageLoaderService) {}

  /** @override */
  validate(control: AbstractControl): Observable<ValidationErrors|null> {
    const url = control.value;
    if (!url) return of(null);
    return this.loader.loadImageDimensions(url).pipe(
        map(({width, height}: Dimensions) => {
          const ratio = width / height;
          if (ratio > 1.1 || ratio < 0.9) {  // relax the bound slightly
            return {imgNotSquare: ratio};
          }
          return null;
        }),
        catchError((err) => of(null)));
  }
}