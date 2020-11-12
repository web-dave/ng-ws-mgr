import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FleetService } from '../../shared/fleet.service';

@Component({
  selector: 'bka-vehicle-new',
  templateUrl: './vehicle-new.component.html',
  styleUrls: ['./vehicle-new.component.scss'],
})
export class VehicleNewComponent implements OnInit, OnDestroy {
  carForm: FormGroup;
  end$ = new Subject();
  private saved = false;
  constructor(
    private builder: FormBuilder,
    private service: FleetService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.carForm = this.builder.group({
      plate: ['', [Validators.required]],
      title: ['', [Validators.required]],
      seats: [2, [Validators.required]],
      status_id: [1, [Validators.required]],
      description: [''],
    });
  }

  save() {
    this.service
      .createCar(this.carForm.value)
      .pipe(takeUntil(this.end$))
      .subscribe(() => {
        this.saved = true;
        this.router.navigate(['..'], { relativeTo: this.route });
      });
  }

  ngOnDestroy() {
    this.end$.next();
  }

  isSaved(): boolean {
    return this.saved || this.carForm.pristine;
  }
}
