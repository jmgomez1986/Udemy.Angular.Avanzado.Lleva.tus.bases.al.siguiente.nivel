import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UsuarioService } from './../../services/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styles: [],
})
export class PerfilComponent implements OnInit {
  public profileForm: FormGroup;
  constructor(private fb: FormBuilder, private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      nombre: ['abc', Validators.required],
      email: ['a@a.com', [Validators.required, Validators.email]],
    });
  }

  actualizarPerfil() {
    console.log(this.profileForm.value);
    this.usuarioService.actualizarPerfil(this.profileForm.value).subscribe(resp => {
      console.log('Respuesta: ', resp);
    });
  }
}
