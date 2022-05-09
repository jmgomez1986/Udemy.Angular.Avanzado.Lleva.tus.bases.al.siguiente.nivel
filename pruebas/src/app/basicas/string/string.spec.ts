import { mensaje } from "./string";

describe('Pruebas de strings', () => {
  it('Debe de regresar un string', () => {
    const resp = mensaje('Matias');

    expect(typeof resp).toBe('string');
  });
});
