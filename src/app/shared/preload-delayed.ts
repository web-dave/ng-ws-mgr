import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay, map, mergeMap, switchMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PreloadDelayed implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    if (route?.data?.preload) {
      return of(0).pipe(
        delay(route.data.delay),
        mergeMap(() => fn())
        // switchMap(() => fn())
        // map(() => fn())
      );
    } else {
      return fn();
    }
  }
}
