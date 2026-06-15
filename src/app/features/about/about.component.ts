import { Component } from '@angular/core';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { TranslationService } from '../../core/services/translation.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  profile = this.data.profile;
  volunteerWork = this.data.volunteerWork;

  highlights = [
    { icon: 'fa-solid fa-code',        labelKey: 'highlight_fullstack_label',   descKey: 'highlight_fullstack_desc' },
    { icon: 'fa-brands fa-wordpress',  labelKey: 'highlight_cms_label',         descKey: 'highlight_cms_desc' },
    { icon: 'fa-solid fa-database',    labelKey: 'highlight_db_label',          descKey: 'highlight_db_desc' },
    { icon: 'fa-solid fa-mobile-alt',  labelKey: 'highlight_responsive_label',  descKey: 'highlight_responsive_desc' },
  ];

  constructor(
    private data: PortfolioDataService,
    public ts: TranslationService,
  ) {}
}
