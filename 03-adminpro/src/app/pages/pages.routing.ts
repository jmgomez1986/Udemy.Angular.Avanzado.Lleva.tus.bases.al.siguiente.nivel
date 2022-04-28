import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from '../guards/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PerfilComponent } from './perfil/perfil.component';
import { BusquedasComponent } from './busquedas/busquedas.component';
// Mantenimientos
import { UsuariosComponent } from './mantenimientos/usuarios/usuarios.component';
import { MedicosComponent } from './mantenimientos/medicos/medicos.component';
import { MedicoComponent } from './mantenimientos/medicos/medico.component';
import { HospitalesComponent } from './mantenimientos/hospitales/hospitales.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: DashboardComponent, data: { title: 'Dashboard' } },
      {
        path: 'progress',
        component: ProgressComponent,
        data: { title: 'ProgressBar' },
      },
      {
        path: 'charts',
        component: Grafica1Component,
        data: { title: 'Charts' },
      },
      {
        path: 'account-settings',
        component: AccountSettingsComponent,
        data: { title: 'Settings' },
      },
      {
        path: 'promises',
        component: PromesasComponent,
        data: { title: 'Promises' },
      },
      { path: 'rxjs', component: RxjsComponent, data: { title: 'RxJs' } },
      {
        path: 'profile',
        component: PerfilComponent,
        data: { title: 'Profile' },
      },
      // Mantenimientos
      {
        path: 'usuarios',
        component: UsuariosComponent,
        data: { title: 'Mantenimiento de usuarios' },
      },
      {
        path: 'medicos',
        component: MedicosComponent,
        data: { title: 'Mantenimiento de medicos' },
      },
      {
        path: 'medico/:id',
        component: MedicoComponent,
        data: { title: 'Mantenimiento de medicos' },
      },
      {
        path: 'hospitales',
        component: HospitalesComponent,
        data: { title: 'Mantenimiento de  hospitales' },
      },
      {
        path: 'buscar/:termino',
        component: BusquedasComponent,
        data: { title: 'Busquedas' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
