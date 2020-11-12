import { Component, Input } from '@angular/core';

@Component({
  selector: 'bka-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent {
  @Input() msg: string;
}
