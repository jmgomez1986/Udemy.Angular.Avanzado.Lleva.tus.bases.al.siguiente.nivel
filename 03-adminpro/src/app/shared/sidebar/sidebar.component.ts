import { Component } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { UsuarioService } from './../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [],
})
export class SidebarComponent {
  menuItems: any[];

  constructor(
    private router: Router,
    private sidebarService: SidebarService,
    private usuarioService: UsuarioService
  ) {
    this.menuItems = sidebarService.menu;
  }

  logout() {
    this.usuarioService.logout();
    this.router.navigateByUrl('/login');
  }
}
