import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {
  linkTheme = document.querySelector('#theme');
  links: NodeListOf<Element>;

  ngOnInit(): void {
    this.links = document.querySelectorAll('.selector');
    this.checkCurrentThem();
  }

  changeTheme(theme: string) {
    const url = `./assets/css/colors/${theme}.css`;

    this.linkTheme?.setAttribute('href', url);
    localStorage.setItem('theme', url);

    this.checkCurrentThem();
  }

  checkCurrentThem() {

    this.links.forEach(element => {
      element.classList.remove('working');
      const btnTheme = element.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linkTheme?.getAttribute('href');

      if (btnThemeUrl === currentTheme) {
        element.classList.add('working');
      }
    });
  }

}
