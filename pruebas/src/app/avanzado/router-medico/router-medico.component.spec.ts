import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';

import { of, Observable } from 'rxjs';

import { RouterMedicoComponent } from './router-medico.component';

class FakeRouter {
  navigate(params: any) {
    return null;
  }
}

class FakeActivatedRoute {
  params: Observable<any> = of({});
}

describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RouterMedicoComponent],
      providers: [
        { provide: Router, useClass: FakeRouter },
        { provide: ActivatedRoute, useClass: FakeActivatedRoute },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe de redireccionar a Médico cuando se guarde', () => {
    const router = TestBed.inject(Router);
    const spy = spyOn(router, 'navigate');

    component.guardarMedico();

    expect(spy).toHaveBeenCalledWith(['medico', '123']);
  });
});
