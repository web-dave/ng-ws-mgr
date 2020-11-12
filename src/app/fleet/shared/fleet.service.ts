import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { catchError, map, pluck, tap } from 'rxjs/operators';
import { INewVehicle, IVehicle } from '../models/ivehicle';
import { ToastService } from '../toast.service';

@Injectable({
  providedIn: 'root',
})
export class FleetService {
  private baseUrl = 'http://localhost:2222/';

  constructor(private http: HttpClient, private toast: ToastService) {}

  getCars(): Observable<IVehicle[]> {
    return this.http.get(this.baseUrl + 'cars').pipe(pluck('cars'));
  }

  getCar(id: number): Observable<IVehicle> {
    return this.http.get(this.baseUrl + 'car/' + id).pipe(
      catchError((err) => {
        console.error('FEHLER!', err);
        return of(null);
      }),
      pluck('car'),
      map((car) => {
        if (!car.image) {
          car.image = 'https://picsum.photos/200';
        }
        return car;
      })
    );
  }

  updateCar(car: IVehicle, id: number): Observable<any> {
    return this.http.post(this.baseUrl + 'car/' + id, car).pipe(
      pluck('car'),
      tap(() => {
        this.toast.addMsg('OK');
      })
    );
  }

  createCar(car: INewVehicle): Observable<any> {
    return this.http.post(this.baseUrl + 'car', car).pipe(
      tap(() => {
        this.toast.addMsg('OK');
      })
    );
  }
}
