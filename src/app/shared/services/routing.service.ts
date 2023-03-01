import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoutingService {
  private _landing = new Subject<boolean>();

  isLanding = this._landing.asObservable();

  landing: boolean = true;

  setLandingRoute(landing: boolean): void {
    this._landing.next(landing);
  }
}
