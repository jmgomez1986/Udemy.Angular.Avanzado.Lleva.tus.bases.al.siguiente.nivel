import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('Incremendator Component', () => {
  let component: IncrementadorComponent;
  let fixture: ComponentFixture<IncrementadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncrementadorComponent],
      imports: [FormsModule],
    });

    fixture = TestBed.createComponent(IncrementadorComponent);
    component = fixture.componentInstance;
  });

  it('Debe de crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Debe de mostrar la leyenda', () => {
    component.leyenda = 'Progreso de carga';

    fixture.detectChanges(); // Dispara la deteccion de cambios

    const element: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;

    expect(element.innerHTML).toContain(component.leyenda);
  });

  it('Debe de mostrar en el input el valor del progreso', () => {
    component.cambiarValor(55);
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const input: DebugElement = fixture.debugElement.query(By.css('input'));
      const element: HTMLInputElement  = input.nativeElement;

      expect(element.value).toBe('55');
    })
  });
});
