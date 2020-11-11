import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FleetService {
  private baseUrl = 'http://localhost:2222/';
  constructor(private http: HttpClient) {}

  getCars() {
    return this.http.get(this.baseUrl + 'cars').pipe(pluck('cars'));
    // .pipe(map((data: { cars: any }) => data.cars));
  }
}
