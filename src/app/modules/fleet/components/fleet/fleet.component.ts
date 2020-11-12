import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../shared/toast.service';
@Component({
  selector: 'bka-fleet',
  templateUrl: './fleet.component.html',
  styleUrls: ['./fleet.component.scss'],
})
export class FleetComponent implements OnInit {
  msgList: string[];
  constructor(private toast: ToastService) {}

  ngOnInit(): void {
    this.msgList = this.toast.getMsg();
  }
}
