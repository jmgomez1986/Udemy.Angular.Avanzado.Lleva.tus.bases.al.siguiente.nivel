import { Component, OnInit } from '@angular/core';
import { MedicoService } from './medico.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.scss'],
})
export class MedicoComponent implements OnInit {
  medicos: any = [];

  constructor(private medicoService: MedicoService) {}

  ngOnInit(): void {}

  saludarMedico(nombre: string) {
    return `Hola ${nombre}`;
  }

  obtenerMedivcos() {
    this.medicoService.getMedicos().subscribe((medicos) => {
      this.medicos = medicos;
    });
  }
}
