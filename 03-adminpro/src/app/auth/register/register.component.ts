import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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
    password2: ['', Validators.required],
    terminos: [false, Validators.requiredTrue],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  crearUsuario() {
    this.formSubmitted = true;
    console.log('Formulario: ', this.registerForm.value);
  }

  campoNoValido(campo: string): boolean {
    return this.registerForm.get(campo)?.invalid && this.formSubmitted
      ? true
      : false;
  }
}
