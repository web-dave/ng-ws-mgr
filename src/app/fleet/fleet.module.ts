import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FleetRoutingModule } from './fleet-routing.module';
import { FleetComponent } from './fleet.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';

@NgModule({
  declarations: [FleetComponent, VehicleListComponent],
  exports: [FleetComponent],
  imports: [CommonModule, FleetRoutingModule],
})
export class FleetModule {}
