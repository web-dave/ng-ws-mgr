import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FleetRoutingModule } from './fleet-routing.module';
import { SeatsPipe } from './shared/seats.pipe';
import { AvailablePipe } from './shared/available.pipe';
import { AvailableDirective } from './shared/available.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FleetComponent } from './components/fleet/fleet.component';
import { ToastComponent } from './components/toast/toast.component';
import { VehicleDetailsComponent } from './components/vehicle-details/vehicle-details.component';
import { VehicleEditComponent } from './components/vehicle-edit/vehicle-edit.component';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { VehicleNewComponent } from './components/vehicle-new/vehicle-new.component';
import { VehiclePreviewComponent } from './components/vehicle-preview/vehicle-preview.component';

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
    VehicleNewComponent,
    ToastComponent,
  ],
  exports: [FleetComponent],
  imports: [CommonModule, FleetRoutingModule, FormsModule, ReactiveFormsModule],
})
export class FleetModule {}
