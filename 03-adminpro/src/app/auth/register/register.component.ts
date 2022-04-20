import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['register.component.css'],
})
export class RegisterComponent {
  public formSubmitted = false;

  public registerForm = this.fb.group({
    nombre: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    password2: ['', [Validators.required, this.passwordsIguales]],
    terminos: [false, Validators.requiredTrue],
  });

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService
  ) {}

  crearUsuario() {
    this.formSubmitted = true;
    console.log('Formulario: ', this.registerForm.value);

    if (this.registerForm.invalid) {
      return;
    }

    this.usuarioService.crearUsuario(this.registerForm.value).subscribe({
      next: (resp) => {
        console.log('Usuario creado');
        console.log('Response: ', resp);
      },
      error: (err) => console.warn(err.error.msg),
    });
  }

  campoNoValido(campo: string): boolean {
    return this.registerForm.get(campo)?.invalid && this.formSubmitted
      ? true
      : false;
  }

  contrasenasNoValidas(): boolean {
    const pass1 = this.registerForm.get('password')?.value;
    const pass2 = this.registerForm.get('password2')?.value;

    return pass1 !== pass2 && this.formSubmitted ? true : false;
  }

  passwordsIguales(control: AbstractControl): ValidationErrors | null {
    const pass1 = control.parent?.get('password')?.value;
    const pass2 = control.value;
    return !pass1 || !pass2 || pass1 !== pass2 ? { noEsIgual: true } : null;
  }
}
