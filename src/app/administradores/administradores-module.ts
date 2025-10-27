import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { Administradores } from './administradores/administradores';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,BrowserModule,MatButtonModule,
  ],
    providers: [
    Administradores
  ]
})
export class AdministradoresModule { }
