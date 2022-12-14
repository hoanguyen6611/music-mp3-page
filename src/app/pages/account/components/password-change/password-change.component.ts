import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AuthService } from 'src/app/core/authentication';
import { CheckConfirmPassword } from './check-confirm.validator';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.scss'],
})
export class PasswordChangeComponent implements OnInit {
  constructor(
    private readonly authService: AuthService,
    private readonly message: NzMessageService,
    private readonly translateService: TranslateService,
    private readonly route: Router,
  ) {}

  ngOnInit(): void {}

  readonly formGroup: FormGroup = new FormGroup(
    {
      congirmationPassword: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}',
        ),
      ]),
      passwordNew: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}',
        ),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}',
        ),
      ]),
    },
    Validators.compose([CheckConfirmPassword()]),
  );
  changePassword() {
    if (this.formGroup.invalid) {
      Object.values(this.formGroup.controls).forEach(i => {
        i.markAsDirty();
        i.updateValueAndValidity();
      });
      return;
    }
    const value = this.formGroup.getRawValue();
    delete value.passwordNew;
    console.log(value);
    this.authService.changePassword(value).subscribe(value => {
      this.message.success(
        this.translateService.instant('MESSAGE.CHANGEPASSWORD_SUCCESS'),
      );
      localStorage.clear();
      window.sessionStorage.clear();
      location.reload();
      this.route.navigate(['/main/login']);
    });
  }
}
