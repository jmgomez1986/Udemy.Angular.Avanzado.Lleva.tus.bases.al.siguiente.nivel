import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

const BASEURL = environment.baseUrl;

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {

  async acualizarImagen(
    archivo: File,
    tipo: 'usuarios' | 'medicos' | 'hospitales',
    id: string
  ) {
    try {
      const url = `${BASEURL}/upload/${tipo}/${id}`;
      const formData = new FormData();

      formData.append('imagen', archivo);

      const resp = await fetch(url, {
        method: 'PUT',
        headers: {
          'x-token': localStorage.getItem('token') || '',
        },
        body: formData,
      });

      const data = await resp.json();
      return data;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
