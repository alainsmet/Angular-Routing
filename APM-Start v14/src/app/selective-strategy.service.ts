import { Injectable, LOCALE_ID } from "@angular/core";
import { Route, PreloadingStrategy } from '@angular/router';

import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class SelectiveStrategy implements PreloadingStrategy {

    preload(route: Route, fn: () => Observable<any>): Observable<any> {
        if (route.data && route.data['preload']) {
            return fn();
        }
        return of(null);
    }
}