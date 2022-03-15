import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [],
})
export class RxjsComponent implements OnInit {
  constructor() {


    this.retornaObservable().pipe(retry(2)).subscribe({
      next: (valor) => console.log('Subs: ', valor),
      error: (err) => console.warn('Error: ', err),
      complete: () => console.info('Obs terminado'),
    });
  }

  ngOnInit(): void {}

  retornaObservable() {
    let i = -1;
    return new Observable<number>((observer) => {
      const intervalo = setInterval(() => {
        i++;
        observer.next(i);
        if (i === 4) {
          clearInterval(intervalo);
          observer.complete();
        }
        if (i === 2) {
          observer.error('i llegó al valor 2');
        }
      }, 1000);
    });
  }
}
