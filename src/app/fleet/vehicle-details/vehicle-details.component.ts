import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { IVehicle } from '../models/ivehicle';
import { FleetService } from '../shared/fleet.service';

@Component({
  selector: 'bka-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss'],
})
export class VehicleDetailsComponent implements OnInit {
  car$: Observable<IVehicle>;
  i = 0;
  constructor(private route: ActivatedRoute, private service: FleetService) {}

  ngOnInit(): void {
    this.car$ = this.route.params.pipe(
      switchMap((params) => this.service.getCar(params.id))
    );
    setInterval(() => (this.i = 1), 1000);
  }

  available(number) {
    console.log(number);
    return number === 1 ? '✔️' : '❌';
  }
}
