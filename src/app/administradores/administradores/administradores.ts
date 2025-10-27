import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AdministradoresService } from './administradores.service';

@Component({
  selector: 'app-administradores',
  standalone: true,
  imports: [CommonModule, FormsModule, MatToolbarModule],
  templateUrl: './administradores.html',
})
export class Administradores {
  descontoBloco1: string = '';
  descontoBloco2: string = '';
  descontoBloco3: string = '';

  constructor(public administradoresService: AdministradoresService) {}

updateDesconto() {
  console.log('🔹 Atualizando descontos:', this.descontoBloco1, this.descontoBloco2, this.descontoBloco3);
  this.administradoresService.setDesconto1(this.descontoBloco1);
  this.administradoresService.setDesconto2(this.descontoBloco2);
  this.administradoresService.setDesconto3(this.descontoBloco3);
}

}
