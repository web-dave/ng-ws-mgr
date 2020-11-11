import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IVehicle } from '../models/ivehicle';
import { FleetService } from '../shared/fleet.service';

@Component({
  selector: 'bka-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss'],
})
export class VehicleListComponent implements OnInit, OnDestroy {
  vehicles: IVehicle[];
  sub: Subscription;

  constructor(
    private service: FleetService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.sub = this.service
      .getCars()
      .subscribe((data) => (this.vehicles = data));
  }

  vehicleWasSelected(vehicle: IVehicle) {
    this.router.navigate([vehicle.id], { relativeTo: this.route });
  }
}
