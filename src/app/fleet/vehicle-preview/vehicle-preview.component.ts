import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'bka-vehicle-preview',
  templateUrl: './vehicle-preview.component.html',
  styleUrls: ['./vehicle-preview.component.scss'],
})
export class VehiclePreviewComponent implements OnInit {
  @Input() vehicle;
  @Output() vehicleselected = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  selectVehicle() {
    this.vehicleselected.emit(this.vehicle);
  }
}
