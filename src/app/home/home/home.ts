import { Component, Injectable, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Administradores } from '../../administradores/administradores/administradores';
import { AdministradoresService } from '../../administradores/administradores/administradores.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  animations: [
    trigger('logoAnim', [
      state('normal', style({ transform: 'scale(1)' })),
      state('hover', style({ transform: 'scale(1.2)' })),
      transition('normal <=> hover', animate('300ms ease-in-out')),
    ]),
  ],
})
export class HomeComponent{
  descontoBloco1: string = '20';
  descontoBloco2: string = '10';
  descontoBloco3: string = '50';
  logoState = 'normal';
  letters = 'HAPPYTIME'.split('');
  isSmallScreen = false;

  colors = ['#ff4c4c', '#4c6cff', '#39FF14', '#ff8c00', '#9b59b6', '#ffd700'];
  currentIndex = 0;

  constructor(
    private breakpointObserver: BreakpointObserver,
    public admin: AdministradoresService
  ) {
    setInterval(() => (this.currentIndex = (this.currentIndex + 1) % this.colors.length), 500);
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe((result) => {
      this.isSmallScreen = result.matches;
    });
  }

  toggleLogo() {
    this.logoState = this.logoState === 'normal' ? 'hover' : 'normal';
  }

  getColor(letterIndex: number): string {
    return this.colors[(this.currentIndex + letterIndex) % this.colors.length];
  }

  /**
   * Monta um link para o WhatsApp com mensagem pré-preenchida mencionando o desconto.
   * Usa '50' como fallback se o desconto não estiver disponível.
   */
  getWhatsAppLink(desconto?: string): string {
    const d = desconto && desconto.toString().trim() ? desconto.toString().trim() : '50';
    const text = `Olá! Vi a promoção da HAPPYTIME: até ${d}% de desconto no aluguel. Gostaria de aproveitar essa oferta — pode me ajudar?`;
    return `https://api.whatsapp.com/send?phone=5567991846759&text=${encodeURIComponent(text)}`;
  }
}
