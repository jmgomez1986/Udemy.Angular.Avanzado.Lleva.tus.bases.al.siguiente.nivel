import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { ModalImagenService } from './../../services/modal-imagen.service';

@Component({
  selector: 'app-modal-imagen',
  templateUrl: './modal-imagen.component.html',
  styles: [
  ]
})
export class ModalImagenComponent implements OnInit {
  public imagenSubir: File;
  public imgTemp: any = null;

  constructor(public modalImagenService: ModalImagenService) { }

  ngOnInit(): void { }

  cerrarModal() {
    this.modalImagenService.cerrarModal();
    this.imgTemp = null;
  }

  cambiarImagen($event: any) {
    const file: File = $event.target?.files[0];
    this.imagenSubir = file;

    if (!file) {
      return (this.imgTemp = null);
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      this.imgTemp = reader.result;
    };
  }
}
