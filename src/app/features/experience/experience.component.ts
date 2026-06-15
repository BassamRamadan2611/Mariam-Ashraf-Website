import { Component } from '@angular/core';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { TranslationService } from '../../core/services/translation.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  experiences = this.data.experiences;
  constructor(private data: PortfolioDataService, public ts: TranslationService) {}

  getTypeClass(type: string): string {
    const map: Record<string, string> = {
      'Full-time': 'type-full',
      'Freelance': 'type-free',
      'Internship': 'type-intern',
    };
    return map[type] || 'type-full';
  }
}
