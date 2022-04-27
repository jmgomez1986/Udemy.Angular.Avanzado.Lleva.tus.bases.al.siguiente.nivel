import { Medico } from '../models/medico.model';

export interface CargarMedicosResponse {
  medicos: Medico[];
  ok: boolean;
  uid: string;
}
