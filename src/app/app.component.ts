import { Component, OnInit } from '@angular/core';
import { ThemeService } from './core/services/theme.service';
import { TranslationService } from './core/services/translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private theme: ThemeService,
    private translation: TranslationService,
  ) {}

  ngOnInit(): void {
    this.theme.init();
    this.translation.init();
  }
}
