import { Component } from '@angular/core';
import { UsuarioService } from './../../services/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from './../../models/usuario.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent {
  public imgUrl = '';
  public user: Usuario;

  constructor(private usuarioService: UsuarioService, private router: Router) {
    this.imgUrl = this.usuarioService.usuario.imagenUrl;
    this.user = this.usuarioService.usuario;
  }

  buscar(value: string) {
    console.log(value);
  }

  logout() {
    this.usuarioService.logout();
    this.router.navigateByUrl('/login');
  }

}
