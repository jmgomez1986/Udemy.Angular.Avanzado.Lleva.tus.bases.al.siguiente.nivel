import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { EMPTY, from, Observable, of, throwError } from 'rxjs';
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

  it('Debe llamar al servidor para agregar un médico', () => {
    // Forma 1
    // const espia = spyOn(servicio, 'agregarMedico').and.callFake(()=> new Observable());
    // Forma 2
    const espia = spyOn(servicio, 'agregarMedico').and.callFake(() => of());
    //Forma 3
    // const espia = spyOn(servicio, 'agregarMedico').and.callFake(() => EMPTY);

    componente.agregarMedico();

    expect(espia).toHaveBeenCalled();
  });

  it('Debe de agregar un nuevo médico al arreglo de médicos', () => {
    const medico = { id: 1, nombre: 'Juan' };

    spyOn(servicio, 'agregarMedico').and.returnValue(from([medico]));

    componente.agregarMedico();

    expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
  });

  it('Si falla la adicion, la propiedad mensajeError, debe ser igual al error del servicio', () => {
    const miError = 'No se pudo agregar el médico';

    spyOn(servicio, 'agregarMedico').and.returnValue(
      throwError(() => new Error(miError))
    );

    componente.agregarMedico();

    expect(componente.mensajeError).toBe(miError);
  });
});
