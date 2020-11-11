import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IVehicle } from '../models/ivehicle';
import { FleetService } from '../shared/fleet.service';

@Component({
  selector: 'bka-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss'],
})
export class VehicleListComponent implements OnInit {
  vehicles$: Observable<IVehicle[]>;

  constructor(
    private service: FleetService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.vehicles$ = this.service.getCars();
  }

  vehicleWasSelected(vehicle: IVehicle): void {
    this.router.navigate([vehicle.id], { relativeTo: this.route });
  }
}
