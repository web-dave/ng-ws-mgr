import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FleetComponent } from './fleet.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { VehicleEditComponent } from './vehicle-edit/vehicle-edit.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';

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
