import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Credentials } from '../../models/credentials';

@Component({
  selector: 'fo-login-form',
  standalone: false,

  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
 // TODO: type form with Credentials type instead any
  loginForm: FormGroup<any> = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)])
  })

  // DI
  constructor(private authService: AuthService) {
  }

  submit() {
    const formValue: Credentials = this.loginForm.value;
    this.authService.postLogin(formValue);
  }
}
