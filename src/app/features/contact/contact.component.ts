import { Component } from '@angular/core';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { TranslationService } from '../../core/services/translation.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  profile = this.data.profile;

  contactInfo = [
    { icon: 'fa-solid fa-envelope',      label: 'Email',    value: 'mariamash70@gmail.com',  href: 'mailto:mariamash70@gmail.com' },
    { icon: 'fa-solid fa-phone',         label: 'Phone',    value: '+201096838500',           href: 'tel:+201096838500' },
    { icon: 'fa-solid fa-location-dot',  label: 'Location', value: 'Beni-Suef, Egypt',        href: null },
    { icon: 'fa-brands fa-linkedin-in',  label: 'LinkedIn', value: 'mariam-ashraf',           href: 'https://www.linkedin.com/in/mariam-ashraf' },
  ];

  constructor(private data: PortfolioDataService, public ts: TranslationService) {}
}
