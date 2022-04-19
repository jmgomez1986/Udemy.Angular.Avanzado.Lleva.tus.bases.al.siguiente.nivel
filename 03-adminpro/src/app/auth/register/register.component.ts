import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm = this.fb.group({
    nombre: ['Matias', [Validators.required, Validators.minLength(3)]],
    email: ['test01@gmail.com', Validators.required],
    password: ['123456', Validators.required],
    password2: ['123456', Validators.required],
    terminos: [false, Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  crearUsuario() {
    console.log('Formulario: ', this.registerForm.value);
  }

}
