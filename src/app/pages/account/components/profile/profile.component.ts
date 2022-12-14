import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/core/authentication';
import { selectUserLogin } from 'src/app/pages/now-playing/store';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  readonly destroy$ = new Subject<void>();
  constructor(
    private readonly store: Store,
    private readonly service: AuthService,
    private readonly message: NzMessageService,
    private readonly translateService: TranslateService,
  ) {
    this.store
      .select(selectUserLogin)
      .pipe(takeUntil(this.destroy$))
      .subscribe(value => {
        this.formGroup.reset();
        this.formGroup.patchValue(value);
      });
    const user = String(localStorage.getItem('user'));
    const myObj = JSON.parse(user);
    var userLogin = {
      name: myObj.name,
      email: myObj.email,
      dateOfBirth: myObj.dateOfBirth,
      sex: myObj.sex,
      country: myObj.country,
    };
    console.log(userLogin);
    this.formGroup.patchValue(userLogin);
  }

  ngOnInit(): void {}
  readonly formGroup: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      Validators.required,
    ]),
    dateOfBirth: new FormControl(new Date()),
    sex: new FormControl(''),
    country: new FormControl(''),
  });
  updateProfile() {
    this.service
      .updateProfile(this.formGroup.getRawValue())
      .subscribe(value => {
        this.message.success(
          this.translateService.instant('MESSAGE.UPDATE_PROFILE_SUCCESS'),
        );
        localStorage.setItem('user', JSON.stringify(this.formGroup.getRawValue()));
      });
  }
}
