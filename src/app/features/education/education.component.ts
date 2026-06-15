import { Component } from '@angular/core';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { TranslationService } from '../../core/services/translation.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent {
  education = this.data.education;
  courses = this.data.courses;
  constructor(private data: PortfolioDataService, public ts: TranslationService) {}
}
