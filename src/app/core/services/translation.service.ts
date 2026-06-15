import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Lang = 'en' | 'ar';

const EN = {
  // Navbar
  nav_about: 'About',
  nav_skills: 'Skills',
  nav_experience: 'Experience',
  nav_projects: 'Projects',
  nav_education: 'Education',
  nav_contact: 'Contact',
  nav_hire: 'Hire Me',

  // Hero
  hero_greeting: '<Hello World />',
  hero_name_first: 'Mariam Ashraf',
  hero_name_last: 'Mohamed',
  hero_role: 'Software Engineer',
  hero_tagline: 'Junior Software Engineer specializing in PHP · Laravel · Angular · WordPress',
  hero_location: 'Beni-Suef, Egypt',
  hero_available: 'Available for opportunities',
  hero_cta_contact: 'Get In Touch',
  hero_cta_projects: 'View Projects',
  hero_stat_years: 'Years Exp.',
  hero_stat_projects: 'Projects',
  hero_stat_wp: 'WP Sites',
  hero_scroll: 'Scroll',

  // About
  about_tag: '01. About Me',
  about_title: 'Who Am I?',
  about_p1: 'I\'m <strong>Mariam Ashraf Mohamed</strong>, a passionate Software Engineer based in <span class="highlight">Beni-Suef, Egypt</span>. I specialize in backend development with <span class="highlight">PHP &amp; Laravel</span>, frontend development with <span class="highlight">Angular</span>, and CMS solutions using <span class="highlight">WordPress &amp; Shopify</span>.',
  about_p2: 'I graduated from the Faculty of Computers and Artificial Intelligence and completed an intensive Full Stack PHP program at <strong>ITI Beni-Suef Branch</strong>. My graduation project — a lung cancer detection web application combining ML and data science — received an <span class="highlight">Excellent</span> grade.',
  about_p3: 'Currently working as a <strong>WordPress Developer at Us Group Company</strong>, I also maintain an active freelance practice building and deploying production websites across multiple industries.',
  about_contact: 'Contact Me',
  about_volunteer_title: 'Volunteer Work',
  highlight_fullstack_label: 'Full Stack',
  highlight_fullstack_desc: 'PHP · Laravel · Angular',
  highlight_cms_label: 'CMS Expert',
  highlight_cms_desc: 'WordPress · Shopify',
  highlight_db_label: 'Databases',
  highlight_db_desc: 'MySQL · MongoDB',
  highlight_responsive_label: 'Responsive',
  highlight_responsive_desc: 'Mobile-first design',

  // Skills
  skills_tag: '02. Skills',
  skills_title: 'Technical Expertise',

  // Experience
  exp_tag: '03. Experience',
  exp_title: 'Work History',

  // Projects
  proj_tag: '04. Projects',
  proj_title: 'My Work',
  proj_visit: 'Visit Site',
  filter_all: 'All',

  // Education
  edu_tag: '05. Education',
  edu_title: 'Academic Background',
  edu_degrees: 'Degrees & Training',
  edu_courses: 'Certificates & Courses',

  // Contact
  contact_tag: '06. Contact',
  contact_title: 'Get In Touch',
  contact_heading: "Let's Work Together",
  contact_body: "I'm currently open to new opportunities — whether it's a full-time role, freelance project, or a collaboration. Feel free to reach out via any channel below.",
  contact_cta_title: 'Ready to start a project?',
  contact_cta_body: "Send me an email and I'll get back to you within 24 hours.",
  contact_send: 'Send Email',
  contact_find: 'Or find me on:',
  contact_available: 'Available for new opportunities',

  // Footer
  footer_crafted: 'Crafted with',
};

const AR: typeof EN = {
  // Navbar
  nav_about: 'من أنا',
  nav_skills: 'المهارات',
  nav_experience: 'الخبرة',
  nav_projects: 'المشاريع',
  nav_education: 'التعليم',
  nav_contact: 'تواصل',
  nav_hire: 'وظّفني',

  // Hero
  hero_greeting: '<مرحباً بالعالم />',
  hero_name_first: 'مريم أشرف',
  hero_name_last: 'محمد',
  hero_role: 'مهندسة برمجيات',
  hero_tagline: 'مهندسة برمجيات متخصصة في PHP · Laravel · Angular · WordPress',
  hero_location: 'بني سويف، مصر',
  hero_available: 'متاحة للفرص',
  hero_cta_contact: 'تواصل معي',
  hero_cta_projects: 'عرض المشاريع',
  hero_stat_years: 'سنوات خبرة',
  hero_stat_projects: 'مشروع',
  hero_stat_wp: 'موقع ووردبريس',
  hero_scroll: 'تمرير',

  // About
  about_tag: '01. من أنا',
  about_title: 'من أنا؟',
  about_p1: 'أنا <strong>مريم أشرف محمد</strong>، مهندسة برمجيات شغوفة مقيمة في <span class="highlight">بني سويف، مصر</span>. أتخصص في تطوير الواجهة الخلفية باستخدام <span class="highlight">PHP وLaravel</span>، وتطوير الواجهة الأمامية باستخدام <span class="highlight">Angular</span>، وحلول إدارة المحتوى عبر <span class="highlight">WordPress وShopify</span>.',
  about_p2: 'تخرجت من كلية الحاسبات والذكاء الاصطناعي، وأتممت برنامجاً مكثفاً في تطوير الويب الشامل باستخدام PHP في <strong>معهد تكنولوجيا المعلومات ITI فرع بني سويف</strong>. حصل مشروع تخرجي — تطبيق ويب للكشف عن سرطان الرئة باستخدام تعلم الآلة — على تقدير <span class="highlight">ممتاز</span>.',
  about_p3: 'أعمل حالياً <strong>مطورة ووردبريس في شركة Us Group</strong>، كما أحافظ على ممارسة مستقلة نشطة لبناء ونشر المواقع الإلكترونية عبر صناعات متعددة.',
  about_contact: 'تواصل معي',
  about_volunteer_title: 'العمل التطوعي',
  highlight_fullstack_label: 'تطوير شامل',
  highlight_fullstack_desc: 'PHP · Laravel · Angular',
  highlight_cms_label: 'خبير CMS',
  highlight_cms_desc: 'WordPress · Shopify',
  highlight_db_label: 'قواعد البيانات',
  highlight_db_desc: 'MySQL · MongoDB',
  highlight_responsive_label: 'متجاوب',
  highlight_responsive_desc: 'تصميم Mobile-first',

  // Skills
  skills_tag: '02. المهارات',
  skills_title: 'الخبرات التقنية',

  // Experience
  exp_tag: '03. الخبرة',
  exp_title: 'المسيرة المهنية',

  // Projects
  proj_tag: '04. المشاريع',
  proj_title: 'أعمالي',
  proj_visit: 'زيارة الموقع',
  filter_all: 'الكل',

  // Education
  edu_tag: '05. التعليم',
  edu_title: 'الخلفية الأكاديمية',
  edu_degrees: 'الدرجات العلمية والتدريب',
  edu_courses: 'الشهادات والدورات',

  // Contact
  contact_tag: '06. تواصل',
  contact_title: 'تواصل معي',
  contact_heading: 'لنعمل معاً',
  contact_body: 'أنا منفتحة حالياً على الفرص الجديدة — سواء كانت دواماً كاملاً، أو مشروعاً مستقلاً، أو تعاوناً. لا تتردد في التواصل عبر أي قناة أدناه.',
  contact_cta_title: 'هل أنت مستعد لبدء مشروع؟',
  contact_cta_body: 'أرسل لي بريداً إلكترونياً وسأرد عليك خلال 24 ساعة.',
  contact_send: 'إرسال بريد',
  contact_find: 'أو تجدني على:',
  contact_available: 'متاحة لفرص جديدة',

  // Footer
  footer_crafted: 'صُنع بـ',
};

export type TranslationKey = keyof typeof EN;

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private readonly STORAGE_KEY = 'portfolio-lang';

  private langSubject = new BehaviorSubject<Lang>('en');
  lang$ = this.langSubject.asObservable();

  get lang(): Lang { return this.langSubject.value; }
  get isAr(): boolean { return this.lang === 'ar'; }

  init(): void {
    const saved = localStorage.getItem(this.STORAGE_KEY) as Lang | null;
    this.apply(saved ?? 'en');
  }

  toggle(): void {
    this.apply(this.lang === 'en' ? 'ar' : 'en');
  }

  t(key: TranslationKey | string): string {
    const dict = this.lang === 'ar' ? AR : EN;
    return (dict as any)[key] ?? key;
  }

  private apply(lang: Lang): void {
    this.langSubject.next(lang);
    localStorage.setItem(this.STORAGE_KEY, lang);
    const html = document.documentElement;
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  }
}
