import { Injectable } from '@angular/core';
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanActivate,
} from '@angular/router';
import { Observable } from 'rxjs';
import { VehicleNewComponent } from '../components/vehicle-new/vehicle-new.component';

@Injectable({
  providedIn: 'root',
})
export class LeaveGuard implements CanDeactivate<VehicleNewComponent> {
  canDeactivate(
    component: VehicleNewComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    console.log(currentRoute);
    console.log(currentState);
    console.log(nextState);
    if (!component.isSaved()) {
      return window.confirm('Uuuuuuh! Nicht gespeichert! Trotzdem gehen?');
    }
    return true;
  }
}
