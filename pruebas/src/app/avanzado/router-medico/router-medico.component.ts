import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-router-medico',
  templateUrl: './router-medico.component.html',
  styles: [],
})
export class RouterMedicoComponent implements OnInit {
  id: string = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  guardarMedico() {
    this.router.navigate(['medico', '123']);
  }
}
