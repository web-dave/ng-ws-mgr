import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FleetRoutingModule } from './fleet-routing.module';
import { FleetComponent } from './fleet.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehiclePreviewComponent } from './vehicle-preview/vehicle-preview.component';

@NgModule({
  declarations: [FleetComponent, VehicleListComponent, VehiclePreviewComponent],
  exports: [FleetComponent],
  imports: [CommonModule, FleetRoutingModule],
})
export class FleetModule {}
