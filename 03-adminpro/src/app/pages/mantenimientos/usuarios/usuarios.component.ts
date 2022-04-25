import { Component, OnInit } from '@angular/core';
import { BusquedasService } from 'src/app/services/busquedas.service';
import Swal from 'sweetalert2';
import { UsuarioService } from '../../../services/usuario.service';
import { Usuario } from './../../../models/usuario.model';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: [],
})
export class UsuariosComponent implements OnInit {
  public totalUsuarios: number = 0;
  public usuarios: Usuario[] = [];
  public usuarioTemp: Usuario[] = [];
  public desde: number = 0;
  public limite: number = 5;
  public cargando: boolean = true;

  constructor(
    private usuarioService: UsuarioService,
    private busquedasService: BusquedasService
  ) {}

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.cargando = true;
    this.usuarioService
      .cargarUsuarios(this.desde, this.limite)
      .subscribe(({ totalReg, usuarios }) => {
        this.totalUsuarios = totalReg;
        this.usuarios = usuarios;
        this.usuarioTemp = usuarios;
        this.cargando = false;
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

  buscar(termino: string) {
    if (termino.length === 0) {
      this.usuarios = this.usuarioTemp;
      return;
    }
    this.cargando = true;
    this.busquedasService
      .buscar('usuarios', termino)
      .subscribe((resultados) => {
        this.usuarios = resultados;
        this.cargando = false;
      });
  }

  eliminarUsuario(usuario: Usuario) {
    if (usuario.uid === this.usuarioService.usuario.uid) {
      Swal.fire('Error!', 'No puede borrarse a si mismo', 'error');
    } else {
      Swal.fire({
        title: '¿Borrar usuario?',
        text: `Está a punto de borrar a ${usuario.nombre}`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Si, borrar',
      }).then((result) => {
        if (result.isConfirmed) {
          this.usuarioService.eliminarUsuario(usuario).subscribe(() => {
            Swal.fire(
              'Usuario borrado!',
              `El usuario ${usuario.nombre} se borró correctamente`,
              'success'
            );
            this.desde = 0;
            this.cargarUsuarios();
          });
        }
      });
    }
  }
}
