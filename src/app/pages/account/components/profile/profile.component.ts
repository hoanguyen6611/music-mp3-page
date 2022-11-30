import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { selectUserLogin } from 'src/app/pages/now-playing/store';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  readonly destroy$ = new Subject<void>();
  constructor(private readonly store: Store) {
    this.store
      .select(selectUserLogin)
      .pipe(takeUntil(this.destroy$))
      .subscribe(value => {
        this.formGroup.reset();
        this.formGroup.patchValue(value);
      });
  }

  ngOnInit(): void {}
  readonly formGroup: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      Validators.required,
    ]),
  });
}
