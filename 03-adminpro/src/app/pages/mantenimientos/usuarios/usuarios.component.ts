import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { Usuario } from './../../../models/usuario.model';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: [
  ]
})
export class UsuariosComponent implements OnInit {
  totalUsuarios: number = 0;
  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.cargarUsuarios(0, 5)
      .subscribe(({totalReg, usuarios}) => {
        this.totalUsuarios = totalReg;
        this.usuarios = usuarios;
    })
  }

}
