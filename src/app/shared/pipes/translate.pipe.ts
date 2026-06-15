import { Pipe, PipeTransform, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslationService, TranslationKey } from '../../core/services/translation.service';

@Pipe({ name: 'translate', pure: false })
export class TranslatePipe implements PipeTransform, OnDestroy {
  private sub: Subscription;

  constructor(
    private ts: TranslationService,
    private cd: ChangeDetectorRef,
  ) {
    this.sub = this.ts.lang$.subscribe(() => this.cd.markForCheck());
  }

  transform(key: string): string {
    return this.ts.t(key as TranslationKey);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
