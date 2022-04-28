import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HospitalService } from './../../../services/hospital.service';
import { Hospital } from '../../../models/hospital.model';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styles: [],
})
export class MedicoComponent implements OnInit {
  public medicoForm: FormGroup;
  public hospitales: Hospital[] = [];

  constructor(private fb: FormBuilder, private hospitalService: HospitalService) {}

  ngOnInit(): void {
    this.medicoForm = this.fb.group({
      nombre: ['Matias', Validators.required],
      hospital: ['', Validators.required],
    });

    this.cargarHospitales();
  }

  cargarHospitales () {
    this.hospitalService.cargarHospitales().subscribe((hospitales) => {
      console.log('Hospitales: ', hospitales);
      this.hospitales = hospitales;
    });
  }

  guardarMedico() {
    console.log('Form: ', this.medicoForm);
  }
}
