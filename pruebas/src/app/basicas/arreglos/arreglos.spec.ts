import { obtenerRobots } from "./arreglos";

// x en el describe saltea todas las pruebas
xdescribe('Pruebas de arreglos', () => {
  it('Debe de retornar al menos 3 robots', () => {
    const resp = obtenerRobots();

    expect(resp.length).toBeGreaterThanOrEqual(3);
  });

  // x en el it saltea la prueba
  xit('Debe de existir "Megaman y "Ultron"', () => {
    const resp = obtenerRobots();

    expect(resp).toContain('Megaman');
    expect(resp).toContain('Ultron');
  });
});
