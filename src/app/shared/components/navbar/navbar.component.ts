import { Component, HostListener, OnInit } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';
import { TranslationService } from '../../../core/services/translation.service';

interface NavLink { key: string; href: string; }

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  scrolled = false;
  menuOpen = false;

  links: NavLink[] = [
    { key: 'nav_about',      href: '#about' },
    { key: 'nav_skills',     href: '#skills' },
    { key: 'nav_experience', href: '#experience' },
    { key: 'nav_projects',   href: '#projects' },
    { key: 'nav_education',  href: '#education' },
    { key: 'nav_contact',    href: '#contact' },
  ];

  constructor(
    public themeService: ThemeService,
    public ts: TranslationService,
  ) {}

  ngOnInit(): void {}

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 60;
  }

  toggleMenu(): void { this.menuOpen = !this.menuOpen; }
  closeMenu(): void  { this.menuOpen = false; }

  scrollTo(href: string): void {
    this.closeMenu();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
