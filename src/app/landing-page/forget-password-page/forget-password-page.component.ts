import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AuthService } from 'src/app/core/authentication';
import { AccountStore } from 'src/app/pages/account/account.store';

@Component({
  selector: 'app-forget-password-page',
  templateUrl: './forget-password-page.component.html',
  styleUrls: ['./forget-password-page.component.scss'],
})
export class ForgetPasswordPageComponent implements OnInit {
  readonly formGroup: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      Validators.required,
    ]),
  });
  constructor(
    private readonly authService: AuthService,
    private readonly route: Router,
    private readonly message: NzMessageService,
    private readonly translateService: TranslateService,
    private readonly store: Store,
    private readonly accountStore: AccountStore,
  ) {}

  ngOnInit(): void {}
  forgetPassword() {
    const value = this.formGroup.getRawValue();
    this.authService.forgetPassword(value).subscribe(value => {
      this.message.success(
        this.translateService.instant('MESSAGE.FORGET_PASSWORD_SUCCESS'),
      );
      this.message.success(
        this.translateService.instant('MESSAGE.NOTIFICATION_EMAIL'),
      );
      this.route.navigate(['/login']);
    });
  }
}
