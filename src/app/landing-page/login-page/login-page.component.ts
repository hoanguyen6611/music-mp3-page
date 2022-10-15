import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/authentication';
import { Router } from '@angular/router';
import { AuthTestService } from 'src/app/core/authentication/auth-test.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AuthV2Service } from 'src/app/core/authentication/auth-v2.service';

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
    private readonly authService: AuthTestService,
    private readonly route: Router,
    private readonly message: NzMessageService,
    private readonly authV2Service: AuthV2Service,
    private readonly authsService: AuthService,
  ) {}
  ngOnInit(): void {}
  loginUser() {
    if (this.formGroup.valid) {
      this.authService.login(this.formGroup.value).subscribe(res => {
        console.log(res)
        this.responsedata = res;
        if (this.responsedata.result) {
          localStorage.setItem('token', this.responsedata.token);
          // localStorage.setItem('name', this.responsedata.data.username);
          this.message.success(this.responsedata.message);
          this.route.navigate(['/main/home']);
        } else {
          this.message.error(this.responsedata.message);
        }
      });
    }
  }
}
