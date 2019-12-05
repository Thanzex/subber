import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loading: boolean = false
  error: boolean = false
  errorMessage

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(7)
    ])
  })
  constructor(
    private auth: AuthService,
    private router: Router
  ) {

  }

  ngOnInit() {
    var element = document.getElementById("loginBox");
    element.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("loginButton").click();
      }
    });
  }

  clicked() {
    this.loading = true
    this.auth.login(this.loginForm.value.email, this.loginForm.value.password)
      .then(() => {
        this.router.navigate(['dashboard'])
      })
      .catch((err) => {
        this.error = true
        this.errorMessage = err
      })
      .finally(() => {
        this.loading = false;
      })
  }

}
