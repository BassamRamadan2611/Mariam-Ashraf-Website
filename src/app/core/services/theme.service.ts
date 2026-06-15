import { Injectable } from '@angular/core';

export type Theme = 'dark' | 'light';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly STORAGE_KEY = 'portfolio-theme';

  private current: Theme = 'dark';

  get theme(): Theme { return this.current; }
  get isDark(): boolean { return this.current === 'dark'; }

  init(): void {
    const saved = localStorage.getItem(this.STORAGE_KEY) as Theme | null;
    const preferred = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    this.apply(saved ?? preferred);
  }

  toggle(): void {
    this.apply(this.current === 'dark' ? 'light' : 'dark');
  }

  private apply(theme: Theme): void {
    this.current = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(this.STORAGE_KEY, theme);
  }
}
