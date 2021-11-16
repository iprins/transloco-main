import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { MyLibService } from 'my-workspace/dist/my-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-tour-of-heroes';

  constructor(private readonly translocoService: TranslocoService, private libService: MyLibService){}

  setLang(lang: 'en' | 'es') {
    this.translocoService.setActiveLang(lang);
    this.libService.setLang(lang);
  }

}
