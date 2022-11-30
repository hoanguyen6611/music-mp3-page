import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { CheckConfirmPassword } from './check-confirm.validator';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {
  isLoading = false;
  responsedata: any;
  constructor(
    private readonly authService: AuthService,
    private readonly route: Router,
    private message: NzMessageService,
    private readonly translateService: TranslateService,
  ) {}

  ngOnInit(): void {}

  readonly formGroup: UntypedFormGroup = new UntypedFormGroup(
    {
      name: new UntypedFormControl('', Validators.required),
      password: new UntypedFormControl('', [
        Validators.required,
        Validators.pattern(
          '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}',
        ),
      ]),
      confirmpassword: new UntypedFormControl('', [
        Validators.required,
        Validators.pattern(
          '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}',
        ),
      ]),
      email: new UntypedFormControl('', [
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        Validators.required,
      ]),
      role: new UntypedFormControl('user'),
    },
    Validators.compose([CheckConfirmPassword()]),
  );
  register() {
    const value = this.formGroup.value;
    if (this.formGroup.valid) {
      delete value.confirmpassword;
      this.authService.register(value).subscribe(res => {
        this.responsedata = res;
        if (this.responsedata.email) {
          this.message.success(
            this.translateService.instant('MESSAGE.REGISTER_SUCCESS'),
          );
          this.message.warning(
            this.translateService.instant('MESSAGE.CONFIRM_EMAIL'),
          );
          this.route.navigate(['/login']);
        } else {
          this.message.error(this.responsedata.message);
        }
      });
    }
  }
}
