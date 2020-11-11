import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FleetService } from '../fleet.service';

@Component({
  selector: 'bka-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss'],
})
export class VehicleListComponent implements OnInit, OnDestroy {
  vehicles;
  sub: Subscription;

  constructor(private service: FleetService) {}

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.sub = this.service
      .getCars()
      .subscribe((data) => (this.vehicles = data));
  }
}
