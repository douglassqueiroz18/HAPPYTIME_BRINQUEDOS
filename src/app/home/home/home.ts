import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

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
      transition('normal <=> hover', animate('300ms ease-in-out'))
    ])
  ]
})
export class HomeComponent {
  logoState = 'normal';
  letters = 'HAPPYTIMEEE'.split('');
  isSmallScreen = false;

  colors = ['#ff4c4c', '#4c6cff', '#39FF14', '#ff8c00', '#9b59b6', '#ffd700'];
  currentIndex = 0;

  constructor(private breakpointObserver: BreakpointObserver) {
    setInterval(() => this.currentIndex = (this.currentIndex + 1) % this.colors.length, 500);
    this.breakpointObserver.observe([Breakpoints.Handset])
    .subscribe(result => {
      this.isSmallScreen = result.matches;
    });
  }

  toggleLogo() {
    this.logoState = this.logoState === 'normal' ? 'hover' : 'normal';
  }

  getColor(letterIndex: number): string {
    return this.colors[(this.currentIndex + letterIndex) % this.colors.length];
  }
}
