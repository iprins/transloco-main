import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component } from "@angular/core";

@Component({
  templateUrl: './demo.component.html',
  selector: 'app-demo'
})
export class DemoComponent {
  constructor(private httpClient: HttpClient) {}
  makeRequest() {
    console.log((this.httpClient as any).demoWaarde);

    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    this.httpClient.get('http://localhost:4200/', { headers, responseType: 'text'}).subscribe(
      data => console.log('demo component: ' + data)
    );
  }
}
