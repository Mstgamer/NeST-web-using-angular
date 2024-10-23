import { Component } from '@angular/core';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})
export class ErrorComponent {

  currentTheme: 'light' | 'dark' = 'light';

  constructor() {
    this.updateTheme();
  }

  toggleTheme(): void {
    this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.updateTheme();
  }

  private updateTheme(): void {
    const root = document.documentElement;
    if (this.currentTheme === 'dark') {
      root.style.setProperty('--bg-color', '#050505');
      root.style.setProperty('--text-color', '#fff');
    } else {
      root.style.setProperty('--bg-color', '#fff');
      root.style.setProperty('--text-color', '#000');
    }
  }



}
