import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Administradores } from '../administradores/administradores/administradores';
import { AdministradoresService } from '../administradores/administradores/administradores.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    AdministradoresService, Administradores
  ]

})
export class HomeModule { }
