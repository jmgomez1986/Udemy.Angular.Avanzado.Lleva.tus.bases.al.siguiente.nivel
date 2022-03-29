import { Component, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [],
})
export class BreadcrumbsComponent implements OnInit {
  title: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.getRoutingData();
  }

  getRoutingData() {
    this.router.events.pipe(
      filter((event: any) => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map( (event: ActivationEnd) => event.snapshot.data)
    ).subscribe((data: any) => {
      this.title = data.title;
      document.title = `AdminPro - ${this.title}`
    });
  }
}
