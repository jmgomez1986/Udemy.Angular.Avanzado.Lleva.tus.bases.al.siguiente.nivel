import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalImagenService {
  ocultaModal: boolean = true;

  get ocultarModal() {
    return this.ocultaModal;
  }

  abrirModal() {
    this.ocultaModal = false;
  }

  cerrarModal() {
    this.ocultaModal = true;
  }
}
