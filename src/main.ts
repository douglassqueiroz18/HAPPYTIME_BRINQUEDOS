import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { Home } from './app/home/home/home';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(App, {
  providers: [
    importProvidersFrom(BrowserAnimationsModule),
    provideRouter([
      { path: '', component: Home },
      { path: 'home', component: Home },
      { path: '**', redirectTo: '' }
    ])
  ]
}).catch(err => console.error(err));
