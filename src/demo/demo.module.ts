import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DemoComponent } from './demo.component';
import { DemoRoutingModule } from './demo-routing.module';
import { AuthInterceptor } from 'src/app/auth.interceptor';
import { MyLibModule} from 'my-workspace/dist/my-lib';


@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    HttpClientModule,
    DemoRoutingModule,
    MyLibModule,
  ],
  exports: [
    DemoComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
})
export class DemoModule { }
