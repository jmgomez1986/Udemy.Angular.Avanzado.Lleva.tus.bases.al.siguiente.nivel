import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

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
  })
});
