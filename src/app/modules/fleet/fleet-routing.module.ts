import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaveGuard } from './shared/leave.guard';
import { VehicleDetailsComponent } from './components/vehicle-details/vehicle-details.component';
import { VehicleEditComponent } from './components/vehicle-edit/vehicle-edit.component';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { VehicleNewComponent } from './components/vehicle-new/vehicle-new.component';
import { FleetComponent } from './components/fleet/fleet.component';

const routes: Routes = [
  {
    path: '',
    component: FleetComponent,
    children: [
      {
        path: '',
        component: VehicleListComponent,
      },
      {
        path: 'new',
        component: VehicleNewComponent,
        canDeactivate: [LeaveGuard],
      },
      {
        path: ':id',
        component: VehicleDetailsComponent,
      },
      {
        path: ':id/edit',
        component: VehicleEditComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FleetRoutingModule {}
