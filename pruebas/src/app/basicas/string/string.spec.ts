import { mensaje } from "./string";

describe('Pruebas de strings', () => {
  it('Debe de regresar un string', () => {
    const resp = mensaje('Matias');

    expect(typeof resp).toBe('string');
  });

  it('Debe de regresar un mensaje con el nombre enviado', () => {
    const nombre = 'Matias';
    const resp = mensaje(nombre);

    expect(resp).toContain(nombre);
  });
});
