import { environment } from '../../environments/environment';

const BASE_URL = environment.baseUrl;

export class Usuario {
  constructor(
    public nombre: string,
    public email: string,
    public password?: string,
    public img?: string,
    public google?: string,
    public role?: string,
    public uid?: string
  ) {}

  get imagenUrl() {
    if (this.img && this.img.includes('https')) {
      return this.img;
    }
    if (this.img) {
      return `${BASE_URL}/upload/usuarios/${this.img}`;
    }
    return `${BASE_URL}/upload/usuarios/no-image`;
  }
}
