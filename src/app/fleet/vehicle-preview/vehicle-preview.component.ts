import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { IVehicle } from '../models/ivehicle';

@Component({
  selector: 'bka-vehicle-preview',
  templateUrl: './vehicle-preview.component.html',
  styleUrls: ['./vehicle-preview.component.scss'],
})
export class VehiclePreviewComponent implements OnInit, OnChanges {
  @Input() vehicle: IVehicle;
  @Output() vehicleselected = new EventEmitter<IVehicle>();
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {}

  selectVehicle(): void {
    this.vehicleselected.emit(this.vehicle);
  }
}
