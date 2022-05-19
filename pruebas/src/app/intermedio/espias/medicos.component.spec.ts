import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { from } from 'rxjs';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';

describe('MedicosComponent', () => {
  let componente: MedicosComponent;
  let servicio: MedicosService;

  beforeEach(() => {
    // Forma 1
    const spy = jasmine.createSpyObj('HttpClient', ['prueba']); //Hacemos un fake
    servicio = new MedicosService(spy);
    componente = new MedicosComponent(servicio);

    // Forma 2
    // TestBed.configureTestingModule({
    //   providers: [HttpClient, HttpHandler, MedicosService],
    // });

    // const fixture = TestBed.createComponent(MedicosComponent);
    // componente = fixture.componentInstance;
    // servicio = fixture.debugElement.injector.get(MedicosService);

  });

  it('Debe de cargar los médicos', () => {
    const medicos = ['medico1', 'medico2', 'medico3'];

    spyOn(servicio, 'getMedicos').and.callFake(() => {
      return from([medicos]);
    });
    componente.ngOnInit();
    expect(componente.medicos.length).toBeGreaterThan(0);
  });
});
