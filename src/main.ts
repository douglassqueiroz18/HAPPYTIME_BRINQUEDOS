import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideRouter, withHashLocation } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { HomeComponent } from './app/home/home/home';
import { Administradores } from './app/administradores/administradores/administradores';

bootstrapApplication(App, {
  providers: [
    importProvidersFrom(BrowserAnimationsModule),
    provideRouter([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'administradores', component: Administradores},

      { path: '**', redirectTo: '' },
    ],
    withHashLocation()

  ),
  ],
}).catch((err) => console.error(err));
