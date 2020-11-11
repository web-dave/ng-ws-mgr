import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { IVehicle } from '../models/ivehicle';
import { FleetService } from '../shared/fleet.service';

@Component({
  selector: 'bka-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss'],
})
export class VehicleDetailsComponent implements OnInit, OnDestroy {
  vehicle: IVehicle;
  end$ = new Subject<number>();

  constructor(private route: ActivatedRoute, private service: FleetService) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params) => this.service.getCar(params.id)),
        takeUntil(this.end$)
      )
      .subscribe((data) => (this.vehicle = data));
  }
  ngOnDestroy() {
    this.end$.next(1);
  }
}
