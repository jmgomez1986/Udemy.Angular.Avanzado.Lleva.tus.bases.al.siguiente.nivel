import { HospitalUser } from '../interfaces/hospital-user.interface';

export class Hospital {
  constructor(
    public nombre: string,
    public id?: string,
    public usuario?: HospitalUser,
    public img?: string
  ) {}
}
