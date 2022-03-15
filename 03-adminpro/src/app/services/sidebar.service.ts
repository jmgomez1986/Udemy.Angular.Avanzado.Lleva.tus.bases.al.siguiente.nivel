import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: any[] = [
    {
      titulo: 'Dashboard',
      icono: 'mdi mdi-gauge',
      submenu: [
        {
          titulo: 'Main',
          url: '/'
        },
        {
          titulo: 'ProgressBar',
          url: 'progress'
        },
        {
          titulo: 'Charts',
          url: 'charts'
        },
        {
          titulo: 'Promesas',
          url: 'promises'
        },
        {
          titulo: 'Observables RxJs',
          url: 'rxjs'
        },
      ]
    }
  ];
}