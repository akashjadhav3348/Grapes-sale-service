import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  email: string = '';
  password: string = '';
  errMsg: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  submit(): void {
    if (!this.email.trim()) {
      this.errMsg = 'Email is required';
    } else if (!this.password.trim()) {
      this.errMsg = 'Password is required';
    } else if (this.email.trim() === 'admin' && this.password === 'admin') {
      localStorage.setItem('user', JSON.stringify({ email: this.email }));
      this.router.navigate(['/dashboard']);
    } else {
      this.errMsg = 'Invalid Credentials';
    }
  }
}

