import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['register.component.css'],
})
export class RegisterComponent implements OnInit {
  public formSubmitted = false;

  public registerForm = this.fb.group({
    nombre: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    password2: ['', [Validators.required, this.passwordsIguales]],
    terminos: [false, Validators.requiredTrue],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  crearUsuario() {
    this.formSubmitted = true;
    console.log('Formulario: ', this.registerForm);

    if (this.registerForm.valid) {
      console.log('Posteando formulario');
    } else {
      console.log('El Formulario no es correcto...');
    }
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
