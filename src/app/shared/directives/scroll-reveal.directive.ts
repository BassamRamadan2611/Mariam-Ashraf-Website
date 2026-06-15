import {
  Directive, ElementRef, Input, OnInit, OnDestroy,
} from '@angular/core';

export type RevealAnimation =
  | 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right'
  | 'zoom-in' | 'flip-up' | 'slide-up';

@Directive({ selector: '[appScrollReveal]' })
export class ScrollRevealDirective implements OnInit, OnDestroy {
  @Input('appScrollReveal') animation: RevealAnimation = 'fade-up';
  @Input() revealDelay = 0;
  @Input() revealThreshold = 0.15;

  private observer!: IntersectionObserver;
  private el: HTMLElement;

  constructor(ref: ElementRef<HTMLElement>) {
    this.el = ref.nativeElement;
  }

  ngOnInit(): void {
    this.el.classList.add('sr-hidden', `sr-${this.animation}`);
    if (this.revealDelay) {
      this.el.style.transitionDelay = `${this.revealDelay}ms`;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.el.classList.add('sr-visible');
          this.observer.unobserve(this.el);
        }
      },
      { threshold: this.revealThreshold },
    );

    this.observer.observe(this.el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
