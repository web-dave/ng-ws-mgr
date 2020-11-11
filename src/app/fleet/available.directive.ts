import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
} from '@angular/core';
import { AvailablePipe } from './shared/available.pipe';

@Directive({
  selector: '[bkaAvailable]',
})
export class AvailableDirective implements OnChanges {
  @Input('bkaAvailable') status: number;
  trans = new AvailablePipe();
  // <span class="badge badge-secondary">New</span>
  element = document.createElement('span');
  constructor(parent: ElementRef) {
    this.element.hidden = true;
    this.element.classList.add('badge', 'badge-secondary');
    parent.nativeElement.appendChild(this.element);
  }
  ngOnChanges() {
    this.element.innerText = this.trans.transform(this.status);
  }
  @HostListener('mouseenter')
  show() {
    this.element.hidden = false;
  }
  @HostListener('mouseleave')
  hide() {
    this.element.hidden = true;
  }
}
