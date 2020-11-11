import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { pluck } from 'rxjs/operators';
import { IVehicle } from '../models/ivehicle';

@Injectable({
  providedIn: 'root',
})
export class FleetService {
  private baseUrl = 'http://localhost:2222/';
  constructor(private http: HttpClient) {}

  getCars(): Observable<IVehicle[]> {
    return this.http.get(this.baseUrl + 'cars').pipe(pluck('cars'));
  }

  getCar(id: number): Observable<IVehicle> {
    return this.http.get(this.baseUrl + 'car/' + id).pipe(pluck('car'));
  }
}
