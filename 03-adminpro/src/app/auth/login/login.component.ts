import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.css'],
})
export class LoginComponent {
  public loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    remember: [false],
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private usuarioService: UsuarioService
  ) {}

  login() {

    this.usuarioService.login(this.loginForm.value).subscribe({
      next: (resp) => {
        console.log('Response: ', resp);
        // this.router.navigateByUrl('/');
      },
      error: (err) => {
        Swal.fire('Error!', err.error.msg, 'error');
      },
    });
  }
}
