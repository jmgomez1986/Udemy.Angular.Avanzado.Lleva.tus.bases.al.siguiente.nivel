import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [],
})
export class IncrementadorComponent {
  @Input('valor') progreso: number = 40;

  cambiarValor(valor: number) {
    this.progreso = this.progreso + valor;

    if (this.progreso >= 100) {
      this.progreso = 100;
    }

    if (this.progreso <= 0) {
      this.progreso = 0;
    }
  }
}
