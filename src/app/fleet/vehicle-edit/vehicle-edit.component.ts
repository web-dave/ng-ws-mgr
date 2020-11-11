import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { IVehicle } from '../models/ivehicle';
import { FleetService } from '../shared/fleet.service';

@Component({
  selector: 'bka-vehicle-edit',
  templateUrl: './vehicle-edit.component.html',
  styleUrls: ['./vehicle-edit.component.scss'],
})
export class VehicleEditComponent implements OnInit, OnDestroy {
  end$ = new Subject<number>();
  vehicle$: Observable<IVehicle>;
  constructor(private route: ActivatedRoute, private service: FleetService) {}
  ngOnInit(): void {
    this.vehicle$ = this.route.params.pipe(
      switchMap((params) => this.service.getCar(params.id)),
      takeUntil(this.end$)
    );
  }
  save(car, id: number) {
    console.log(car);
    this.service.updateCar(car, id).pipe(takeUntil(this.end$)).subscribe();
  }

  ngOnDestroy() {
    this.end$.next(0);
  }
}
