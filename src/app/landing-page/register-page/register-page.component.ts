import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AuthTestService } from 'src/app/core/authentication/auth-test.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {
  isLoading = false;
  responsedata: any;
  constructor(
    private readonly authTestService: AuthTestService,
    private readonly route: Router,
    private message: NzMessageService,
  ) {}

  ngOnInit(): void {}

  readonly formGroup: FormGroup = new FormGroup({
    customerFullName: new FormControl('', Validators.required),
    customerUsername: new FormControl('', Validators.required),
    customerPassword: new FormControl('', Validators.required),
    customerPhone: new FormControl(''),
    address: new FormControl(''),
  });
  register() {
    if (this.formGroup.valid) {
      this.authTestService.register(this.formGroup.value).subscribe(res => {
        this.responsedata = res;
        if (this.responsedata.result) {
          this.message.success(this.responsedata.message);
          this.route.navigate(['/login']);
        } else {
          this.message.error(this.responsedata.message)
        }
      });
    }
  }
}
