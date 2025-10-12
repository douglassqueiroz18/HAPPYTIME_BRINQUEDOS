import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common'; // substitui BrowserModule
import { MatButtonModule } from '@angular/material/button'; // exemplo adicional, se precisar
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,        // substitui BrowserModule
    MatToolbarModule,
    MatButtonModule      // se precisar de botões
  ],
  animations:[
    trigger('logoAnim', [
      state('normal', style({ transform: 'scale(1)' })),
      state('hover', style({ transform: 'scale(1.2)', color: '#FFD700' })),
      transition('normal <=> hover', animate('300ms ease-in-out'))
    ])
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'], // corrige typo: styleUrls, não styleUrl
})
export class Home {
  logoState = 'normal';

  toggleLogo() {
    this.logoState = this.logoState === 'normal' ? 'hover' : 'normal';
  }
  colors = ['red', 'blue', '#39FF14', 'orange', 'purple', 'yellow'];
  currentIndex = 0;
    // Retorna cor atual para cada letra
  getColor(letterIndex: number): string {
    const total = this.colors.length;
    // Desloca as cores para criar efeito carrossel
    return this.colors[(this.currentIndex + letterIndex) % total];
  }

  // Muda índice a cada 500ms
  constructor() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.colors.length;
    }, 500);
  }
}
