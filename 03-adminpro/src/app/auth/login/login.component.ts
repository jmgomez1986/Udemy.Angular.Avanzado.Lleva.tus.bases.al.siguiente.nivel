import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { UsuarioService } from '../../services/usuario.service';

declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.css'],
})
export class LoginComponent implements OnInit {
  public auth2: any;
  public loginForm = this.fb.group({
    email: [
      localStorage.getItem('email') || '',
      [Validators.required, Validators.email],
    ],
    password: ['', Validators.required],
    remember: [false],
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.renderButton();
  }

  login() {
    this.usuarioService.login(this.loginForm.value).subscribe({
      next: (resp) => {
        console.log('Response: ', resp);
        if (this.loginForm.get('remember')?.value) {
          localStorage.setItem('email', this.loginForm.get('email')?.value);
        } else {
          localStorage.removeItem('email');
        }

        this.router.navigateByUrl('/');
      },
      error: (err) => {
        Swal.fire('Error!', err.error.msg, 'error');
      },
    });
  }

  renderButton() {
    gapi.signin2.render('my-signin2', {
      scope: 'profile email',
      width: 240,
      height: 50,
      longtitle: true,
      theme: 'dark',
    });

    this.startApp();
  }

  startApp() {
    gapi.load('auth2', () => {
      // Retrieve the singleton for the GoogleAuth library and set up the client.
      this.auth2 = gapi.auth2.init({
        clientId:
          '80746467600-dm1vkbgftkp1655i96ur49gftv5rl3n5.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
      });
      this.attachSignin(document.getElementById('my-signin2'));
    });
  }

  attachSignin(element) {
    this.auth2.attachClickHandler(
      element,
      {},
      (googleUser) => {
        const token = googleUser.getAuthResponse().id_token;

        this.usuarioService.loginGoogle(token).subscribe(() => {
          this.router.navigateByUrl('/');
        });

      },
      (error) => {
        alert(JSON.stringify(error));
      }
    );
  }
}
