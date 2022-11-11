import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  responsedata: any;
  readonly formGroup: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  constructor(
    private readonly authService: AuthService,
    private readonly route: Router,
    private readonly message: NzMessageService,
    private readonly translateService: TranslateService
  ) {}
  ngOnInit(): void {}
  loginUser() {
    if (this.formGroup.valid) {
      this.authService.login(this.formGroup.value).subscribe(res => {
        this.responsedata = res;
        if (this.responsedata.token) {
          localStorage.setItem('token', this.responsedata.token);
          localStorage.setItem('name', this.responsedata.user.name)
          this.message.success(this.translateService.instant('MESSAGE.LOGIN_SUCCESS'));
          this.route.navigate(['/main/home']);
        } else {
          this.message.error(this.responsedata.message);
        }
      });
    }
  }
}
