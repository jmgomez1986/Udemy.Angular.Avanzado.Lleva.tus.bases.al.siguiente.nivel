import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { Usuario } from './../../../models/usuario.model';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: [],
})
export class UsuariosComponent implements OnInit {
  totalUsuarios: number = 0;
  usuarios: Usuario[] = [];
  desde: number = 0;
  limite: number = 5;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.usuarioService
      .cargarUsuarios(this.desde, this.limite)
      .subscribe(({ totalReg, usuarios }) => {
        this.totalUsuarios = totalReg;
        this.usuarios = usuarios;
        console.log('Usuarios: ', usuarios);
      });
  }

  cambiarPagina(valor: number) {
    this.desde += valor;

    if (this.desde < 0) {
      this.desde = 0;
    } else if (this.desde >= this.totalUsuarios) {
      this.desde -= valor;
    }

    this.cargarUsuarios();
  }
}
