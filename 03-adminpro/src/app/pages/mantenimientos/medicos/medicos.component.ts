import { Component, OnInit, OnDestroy } from '@angular/core';
import { delay, Subscription } from 'rxjs';
import { Medico } from '../../../models/medico.model';
import { MedicoService } from '../../../services/medico.service';
import { ModalImagenService } from '../../../services/modal-imagen.service';
import { BusquedasService } from '../../../services/busquedas.service';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styles: [],
})
export class MedicosComponent implements OnInit, OnDestroy {
  public subs: Subscription;
  public medicos: Medico[] = [];
  public medicosTemp: Medico[] = [];
  public cargando: boolean = true;

  constructor(
    private medicoService: MedicoService,
    private modalImagenService: ModalImagenService,
    private busquedasService: BusquedasService
  ) {}

  ngOnInit(): void {
    this.cargarMedicos();

    this.subs = this.modalImagenService.nuevaImagen
      .pipe(delay(100))
      .subscribe(() => {
        this.cargarMedicos();
      });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  cargarMedicos() {
    this.cargando = true;
    this.medicoService.cargarMedicos().subscribe((medicos) => {
      this.medicos = medicos;
      this.medicosTemp = medicos;
      this.cargando = false;
    });
  }

  abrirModal(medico: Medico) {
    this.modalImagenService.abrirModal('medicos', medico._id, medico.img);
  }

  buscar(termino: string) {
    if (termino.length === 0) {
      this.medicos = this.medicosTemp;
      return;
    }
    this.cargando = true;
    this.busquedasService
      .buscar('medicos', termino)
      .subscribe((resultados: Medico[]) => {
        this.medicos = resultados;
        this.cargando = false;
      });
  }
}
