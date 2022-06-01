import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { GraficoBarraHorizontalComponent } from './grafico-barra-horizontal/grafico-barra-horizontal.component';

@NgModule({
  declarations: [NavbarComponent, GraficoBarraHorizontalComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, GraficoBarraHorizontalComponent],
})
export class ComponentsModule {}
