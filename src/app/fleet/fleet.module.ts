import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FleetRoutingModule } from './fleet-routing.module';
import { FleetComponent } from './fleet.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehiclePreviewComponent } from './vehicle-preview/vehicle-preview.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { AvailablePipe } from './shared/available.pipe';
import { SeatsPipe } from './shared/seats.pipe';

@NgModule({
  declarations: [FleetComponent, VehicleListComponent, VehiclePreviewComponent, VehicleDetailsComponent, AvailablePipe, SeatsPipe],
  exports: [FleetComponent],
  imports: [CommonModule, FleetRoutingModule],
})
export class FleetModule {}
