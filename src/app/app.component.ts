import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
// import { MyLibService } from 'my-workspace/dist/my-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-tour-of-heroes';

  constructor(private readonly translocoService: TranslocoService, /* private libService: MyLibService, */ private httpClient: HttpClient){}

  setLang(lang: 'en' | 'es') {
    this.translocoService.setActiveLang(lang);
    // this.libService.setLang(lang);
  }

  demoRequest() {
    const http = this.httpClient as any;
    console.log(http.demoWaarde);
    http.demoWaarde = 5;
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');

    this.httpClient.get('http://localhost:4200/', { headers, responseType: 'text'}).subscribe(data => {
      console.log('app.component: ' + data)
    });
  }
}
