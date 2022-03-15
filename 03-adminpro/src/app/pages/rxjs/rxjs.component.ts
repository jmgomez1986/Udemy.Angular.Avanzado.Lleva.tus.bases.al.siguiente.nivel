import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { retry, take, map } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [],
})
export class RxjsComponent implements OnInit {
  constructor() {

    // this.retornaObservable().pipe(retry(2)).subscribe({
    //   next: (valor) => console.log('Subs: ', valor),
    //   error: (err) => console.warn('Error: ', err),
    //   complete: () => console.info('Obs terminado'),
    // });

    this.retornaIntervalo().subscribe((valor) => console.log(valor));
  }

  ngOnInit(): void {}

  retornaIntervalo(): Observable<number> {
    return interval(1000).pipe(
      take(5),
      map((val) => {
        return val + 1;
      })
    );
  }

  retornaObservable(): Observable<number> {
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
