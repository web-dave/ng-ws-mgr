import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IVehicle } from '../models/ivehicle';

@Component({
  selector: 'bka-vehicle-preview',
  templateUrl: './vehicle-preview.component.html',
  styleUrls: ['./vehicle-preview.component.scss'],
})
export class VehiclePreviewComponent implements OnInit {
  @Input() vehicle: IVehicle;
  @Output() vehicleselected = new EventEmitter<IVehicle>();
  constructor() {}

  ngOnInit(): void {}

  selectVehicle(): void {
    this.vehicleselected.emit(this.vehicle);
  }
}
