import { HttpClient } from '@angular/common/http';
import {
  TRANSLOCO_LOADER,
  Translation,
  TranslocoLoader,
  TRANSLOCO_CONFIG,
  translocoConfig,
  TranslocoModule,
  TRANSLOCO_SCOPE
} from '@ngneat/transloco';
import { Injectable, ModuleWithProviders, NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { CommonModule } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  constructor(private http: HttpClient) {}

  getTranslation(lang: string) {
    return this.http.get<Translation>(`/assets/i18n/${lang}.json`);
  }
}

export type AvailableLang = string | { id: string; label: string } | undefined;

@NgModule({
  imports: [TranslocoModule],
  exports: [ TranslocoModule, CommonModule ],
  // providers: [
  //   {
  //     provide: TRANSLOCO_CONFIG,
  //     useValue: translocoConfig({
  //       availableLangs: ['en', 'es'],
  //       defaultLang: 'en',
  //       // Remove this option if your application doesn't support changing language in runtime.
  //       reRenderOnLangChange: true,
  //       prodMode: environment.production,
  //     })
  //   },
  //   { provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoader }
  // ]
})
export class TranslocoRootModule {
  static forRoot(prodMode: boolean): ModuleWithProviders<TranslocoRootModule> {
    return {
      ngModule: TranslocoRootModule, 
      providers: [
          {
            provide: TRANSLOCO_CONFIG,
            useValue: translocoConfig({
              availableLangs: ['en', 'es'],
              defaultLang: 'en',
              // Remove this option if your application doesn't support changing language in runtime.
              reRenderOnLangChange: true,
              prodMode: prodMode,
            })
          },
          { provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoader }
        ]
    };
  }

  static forChild(scopeName: string, loader: any): ModuleWithProviders<TranslocoRootModule> {
    return {
      ngModule: TranslocoRootModule,
      providers: [
        { provide: TRANSLOCO_SCOPE, useValue: { scope: scopeName, loader }}
      ]
    };
  }
}
