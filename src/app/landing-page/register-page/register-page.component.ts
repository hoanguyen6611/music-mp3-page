import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AuthService } from 'src/app/core/authentication/auth.service';

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
    private readonly translateService: TranslateService
  ) {}

  ngOnInit(): void {}

  readonly formGroup: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    role: new FormControl('user')
  });
  register() {
    if (this.formGroup.valid) {
      this.authService.register(this.formGroup.value).subscribe(res => {
        this.responsedata = res;
        console.log(res);
        if (this.responsedata.email) {
          this.message.success(this.translateService.instant('MESSAGE.REGISTER_SUCCESS'));
          this.route.navigate(['/login']);
        } else {
          this.message.error(this.responsedata.message)
        }
      });
    }
  }
}
