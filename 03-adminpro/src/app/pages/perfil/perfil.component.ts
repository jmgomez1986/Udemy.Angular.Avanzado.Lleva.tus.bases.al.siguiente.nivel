import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UsuarioService } from './../../services/usuario.service';
import { Usuario } from './../../models/usuario.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styles: [],
})
export class PerfilComponent implements OnInit {
  public usuario: Usuario;
  public profileForm: FormGroup;
  constructor(private fb: FormBuilder, private usuarioService: UsuarioService) {
    this.usuario = usuarioService.usuario; // Se esta asignando una referencia
  }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      nombre: [this.usuario.nombre, Validators.required],
      email: [this.usuario.email, [Validators.required, Validators.email]],
    });
  }

  actualizarPerfil() {
    console.log(this.profileForm.value);
    this.usuarioService.actualizarPerfil(this.profileForm.value).subscribe(resp => {
      console.log('Respuesta: ', resp);
      const {nombre, email} = resp.usuarioActualizado;
      this.usuario.nombre = nombre;
      this.usuario.email = email;
    });
  }
}
