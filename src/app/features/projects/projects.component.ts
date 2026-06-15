import { Component } from '@angular/core';
import { PortfolioDataService, Project } from '../../core/services/portfolio-data.service';
import { TranslationService } from '../../core/services/translation.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  allProjects = this.data.projects;
  activeFilter = 'All';

  filters = ['All', 'WordPress', 'Shopify', 'Graduation Project', 'Personal', 'Academic'];

  constructor(private data: PortfolioDataService, public ts: TranslationService) {}

  get filteredProjects(): Project[] {
    if (this.activeFilter === 'All') return this.allProjects;
    return this.allProjects.filter(p => p.type === this.activeFilter);
  }

  setFilter(f: string): void { this.activeFilter = f; }

  getTypeIcon(type: string): string {
    const map: Record<string, string> = {
      'WordPress': 'fa-brands fa-wordpress',
      'Shopify': 'fa-solid fa-bag-shopping',
      'Graduation Project': 'fa-solid fa-graduation-cap',
      'Academic': 'fa-solid fa-book',
      'Personal': 'fa-solid fa-user-code',
    };
    return map[type] || 'fa-solid fa-folder';
  }

  getTypeClass(type: string): string {
    const map: Record<string, string> = {
      'WordPress': 'type-wp',
      'Shopify': 'type-shopify',
      'Graduation Project': 'type-grad',
      'Academic': 'type-academic',
      'Personal': 'type-personal',
    };
    return map[type] || '';
  }

  filterLabel(f: string): string {
    return f === 'All' ? this.ts.t('filter_all') : f;
  }
}
