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
  // option1
  subs: Subscription[] = [];

  // option2
  mysub = new Subscription();
  // option3
  end$ = new Subject<number>();

  constructor(private route: ActivatedRoute, private service: FleetService) {}

  ngOnInit(): void {
    /*
      // 1
      // this.subs.push(
      //   this.route.params.subscribe((params: { id: number }) =>
      //     this.subs.push(
      //       this.service
      //         .getCar(params.id)
      //         .subscribe((data) => (this.vehicle = data))
      //     )
      //   )
      // );
      // 2
      // this.mysub.add(
      //   this.route.params.subscribe((params: { id: number }) =>
      //     this.mysub.add(
      //       this.service
      //         .getCar(params.id)
      //         .subscribe((data) => (this.vehicle = data))
      //     )
      //   )
      // );
    */
    // 3
    // this.route.params
    //   .pipe(takeUntil(this.end$))
    //   .subscribe((params: { id: number }) =>
    //     this.service
    //       .getCar(params.id)
    //       .pipe(takeUntil(this.end$))
    //       .subscribe((data) => (this.vehicle = data))
    //   );
    // 4
    this.route.params
      .pipe(
        switchMap((params) => this.service.getCar(params.id)),
        takeUntil(this.end$)
      )
      .subscribe((data) => (this.vehicle = data));
  }
  ngOnDestroy() {
    this.subs.forEach((s) => s.unsubscribe());
    this.mysub.unsubscribe();
    this.end$.next(1);
  }
}
