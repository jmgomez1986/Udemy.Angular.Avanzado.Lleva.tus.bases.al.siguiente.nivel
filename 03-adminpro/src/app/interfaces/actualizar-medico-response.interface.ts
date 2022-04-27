interface _Medico {
  nombre: string;
  usuario: string;
  hospital: string;
  uid: string;
}

export interface ActualizarMedicoResponse {
  ok: boolean;
  msg: string;
  medico: _Medico;
}
