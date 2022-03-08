import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { NotpagefoundComponent } from './pages/notpagefound/notpagefound.component';
import { RegisterComponent } from './auth/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NotpagefoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, PagesModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
