import { IncrementadorComponent } from './incrementador.component';

describe('Incremendador Component Unit', () => {
  let component: IncrementadorComponent;

  beforeEach(() => component = new IncrementadorComponent());

  it('Debe de crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('No debe de pasar de 100 el progreo', () => {
    component.progreso = 100;
    component.cambiarValor(5);
    expect(component.progreso).toBe(100);
  });
});
