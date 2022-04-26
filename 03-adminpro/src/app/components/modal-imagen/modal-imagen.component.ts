import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-imagen',
  templateUrl: './modal-imagen.component.html',
  styles: [
  ]
})
export class ModalImagenComponent implements OnInit {
  ocultarModal: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  cerrarModal() {
    this.ocultarModal = true;
  }
}
