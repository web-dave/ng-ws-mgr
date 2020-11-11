import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FleetRoutingModule } from './fleet-routing.module';
import { FleetComponent } from './fleet.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehiclePreviewComponent } from './vehicle-preview/vehicle-preview.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { AvailablePipe } from './shared/available.pipe';
import { SeatsPipe } from './shared/seats.pipe';
import { AvailableDirective } from './available.directive';
import { VehicleEditComponent } from './vehicle-edit/vehicle-edit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FleetComponent,
    VehicleListComponent,
    VehiclePreviewComponent,
    VehicleDetailsComponent,
    AvailablePipe,
    SeatsPipe,
    AvailableDirective,
    VehicleEditComponent,
  ],
  exports: [FleetComponent],
  imports: [CommonModule, FleetRoutingModule, FormsModule],
})
export class FleetModule {}
