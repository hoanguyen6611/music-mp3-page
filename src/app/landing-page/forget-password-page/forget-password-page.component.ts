import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/authentication';

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
  constructor(private readonly authService: AuthService) {}

  ngOnInit(): void {}
  forgetPassword() {
    const value = this.formGroup.getRawValue();
    this.authService.forgetPassword(value).subscribe(value => {
      console.log(value);
    });
  }
}
