import { Injectable } from '@angular/core';

export interface Skill {
  name: string;
  icon: string;
  category: string;
}

export interface SkillGroup {
  category: string;
  icon: string;
  skills: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  type: string;
  description?: string;
}

export interface Project {
  name: string;
  url?: string;
  type: string;
  description?: string;
  tags: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  detail?: string;
  grade?: string;
}

export interface Course {
  title: string;
  provider: string;
}

@Injectable({ providedIn: 'root' })
export class PortfolioDataService {

  readonly profile = {
    name: 'Mariam Ashraf Mohamed',
    title: 'Software Engineer',
    tagline: 'Junior Software Engineer specializing in PHP · Laravel · Angular · WordPress',
    location: 'Beni-Suef, Egypt',
    email: 'mariamash70@gmail.com',
    phone: '+201096838500',
    linkedin: 'https://www.linkedin.com/in/mariam-ashraf-1a1a47199/',
    github: 'https://github.com/MariamAshraf113',
    languages: ['Arabic (Native)', 'English'],
  };

  readonly skillGroups: SkillGroup[] = [
    {
      category: 'PHP & Backend',
      icon: 'fa-solid fa-server',
      skills: ['PHP Core', 'Laravel', 'MVC', 'REST API', 'Composer', 'XAMPP'],
    },
    {
      category: 'CMS & E-commerce',
      icon: 'fa-brands fa-wordpress',
      skills: ['WordPress', 'Shopify', 'WooCommerce', 'Elementor', 'Divi'],
    },
    {
      category: 'Frontend',
      icon: 'fa-solid fa-layer-group',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Angular', 'Bootstrap', 'Material UI', 'jQuery'],
    },
    {
      category: 'Node & Databases',
      icon: 'fa-solid fa-database',
      skills: ['Node.js', 'Express.js', 'MySQL', 'MongoDB', 'PHPMyAdmin', 'Apache'],
    },
    {
      category: 'Languages',
      icon: 'fa-solid fa-code',
      skills: ['PHP', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'C++', 'Python'],
    },
    {
      category: 'Tools & Concepts',
      icon: 'fa-solid fa-tools',
      skills: ['Git', 'VS Code', 'Postman', 'Android Studio', 'PyCharm', 'OOP', 'MVC', 'Agile', 'Data Structures'],
    },
  ];

  readonly experiences: Experience[] = [
        {
      role: 'WordPress Developer',
      company: 'SocialZ Marketing Agency',
      period: 'June 2025 – Present',
      type: 'Full-time',
    },
    {
      role: 'WordPress Developer',
      company: 'Us Group Company',
      period: 'May 2024 – May 2025',
      type: 'Full-time',
    },
    {
      role: 'Freelance Web Developer',
      company: 'Online Platforms (Nafzly & Others)',
      period: 'Sep 2023 – Present',
      type: 'Freelance',
    },
    {
      role: 'WordPress Developer',
      company: 'Web Star Company',
      period: 'Dec 2023 – Apr 2024',
      type: 'Full-time',
    },
    {
      role: 'IT Specialist Trainee',
      company: 'Emessa DENIM Company',
      period: 'Jun 2023 – Jul 2023',
      type: 'Internship',
    },
    {
      role: 'Purchasing Specialist & Data Entry',
      company: 'Emessa Company',
      period: 'Jan 2023 – Jun 2023',
      type: 'Full-time',
    },
    {
      role: 'Manager',
      company: 'Almotamiz Lessons Academy',
      period: 'Sep 2022 – Jan 2023',
      type: 'Full-time',
    },
  ];

  readonly projects: Project[] = [

 
    {
      name: 'Raadaljalid.com',
      url: 'https://raadaljalid.com/',
      type: 'Shopify',
      tags: ['Shopify', 'E-commerce'],
    },
    {
      name: 'Shopyneer.com',
      url: 'https://shopyneer.com',
      type: 'Shopify',
      tags: ['Shopify', 'E-commerce'],
    },
    {
      name: 'Hallyustyle.com',
      url: 'https://hallyustyle.com',
      type: 'Shopify',
      tags: ['Shopify', 'E-commerce'],
    },
    {
      name: 'M3sar.ae',
      url: 'https://www.m3sar.ae/',
      type: 'Shopify',
      tags: ['Shopify', 'E-commerce', 'UAE'],
    },
    {
      name: 'Alsumait Group',
      url: 'https://alsumaitgroup.com/',
      type: 'WordPress',
      tags: ['WordPress', 'Corporate'],
    },
    {
      name: 'TS Rolls',
      url: 'https://tsrolls.com/',
      type: 'WordPress',
      tags: ['WordPress', 'Business'],
    },
    {
      name: 'Wasal Alkhayr',
      url: 'https://wasalalkhayr.com',
      type: 'WordPress',
      tags: ['WordPress', 'Charity'],
    },
    {
      name: 'KSA Shipping Alealam',
      url: 'https://ksa-shipping-alealam.com',
      type: 'WordPress',
      tags: ['WordPress', 'Shipping'],
    },
    {
      name: 'Elsoot',
      url: 'https://elsoot.com',
      type: 'WordPress',
      tags: ['WordPress', 'Media'],
    },
    {
      name: 'Bnean Alhejaz',
      url: 'https://bneanalhejaz.com.sa',
      type: 'WordPress',
      tags: ['WordPress', 'Construction'],
    },
    {
      name: 'Al Ittihad Cleaning',
      url: 'https://alittihad-cleaning.com',
      type: 'WordPress',
      tags: ['WordPress', 'Services'],
    },
    {
      name: 'Elnarges',
      url: 'https://elnarges.com',
      type: 'WordPress',
      tags: ['WordPress', 'Business'],
    },
    {
      name: 'Harvest Tours',
      url: 'https://harvest-tours.com',
      type: 'WordPress',
      tags: ['WordPress', 'Tourism'],
    },
    {
      name: 'Amr Ghyada',
      url: 'https://amrghyada.com/',
      type: 'WordPress',
      tags: ['WordPress', 'Personal'],
    },
    {
      name: 'Solid Cash',
      url: 'https://solid-cash.com/',
      type: 'WordPress',
      tags: ['WordPress', 'Finance'],
    },
    {
      name: 'Lung Cancer Detection Web App',
      type: 'Graduation Project',
      description: 'Web Application with ML model and dataset for lung cancer detection (Grade: Excellent)',
      tags: ['PHP', 'ML', 'Python', 'Healthcare'],
    },
    {
      name: 'Hybrid Learning Web App',
      type: 'Academic',
      description: 'Web application for hybrid learning environment',
      tags: ['HTML', 'CSS', 'JS'],
    },
    {
      name: 'Online Store Website',
      type: 'Personal',
      description: 'Full e-commerce solution with PHP backend',
      tags: ['PHP', 'MySQL', 'HTML', 'CSS', 'JS'],
    },
    {
      name: 'Cinema Movie Website',
      type: 'Personal',
      description: 'Movie listing and booking SPA',
      tags: ['Angular', 'HTML', 'CSS', 'JS'],
    },
  ];

  readonly education: Education[] = [
    {
      degree: 'Full Stack PHP Intensive Code Camp',
      institution: 'Information Technology Institute (ITI) — Beni-Suef Branch',
      period: 'Jul 2023 – Nov 2023',
      detail: 'Intensive training in Full Stack development using PHP',
    },
    {
      degree: 'Bachelor of Computers and Artificial Intelligence',
      institution: 'Faculty of Computers and Artificial Intelligence',
      period: 'Aug 2018 – May 2022',
      grade: 'GPA: 3.2',
      detail: 'Graduation Project: Lung Cancer Detection Web App — Grade: Excellent',
    },
  ];

  readonly courses: Course[] = [
    { title: 'Build 5 PHP and MySQL Projects', provider: 'Udemy' },
    { title: 'Build a Modern REST API with PHP 8', provider: 'Udemy' },
    { title: 'Certificate of Completion SAS', provider: 'SAS Institute' },
    { title: 'Certificate of Completion SAS Advanced', provider: 'SAS Institute' },
  ];

  readonly volunteerWork = [
    {
      role: 'Head of Social Media Committee',
      organization: 'IEEE Beni-Suef Branch',
      period: 'Aug 2019 – May 2022',
    },
    {
      role: 'Volunteer',
      organization: 'Resala Charitable Foundation',
      period: '2018 – 2023',
    },
  ];
}
