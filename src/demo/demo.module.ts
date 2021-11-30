import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DemoComponent } from './demo.component';
import { DemoRoutingModule } from './demo-routing.module';
import { AuthInterceptor } from 'src/app/auth.interceptor';
// import { MyLibModule} from 'my-workspace/dist/my-lib';
import { TranslocoRootModule } from 'src/app/transloco-root.module';



@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    HttpClientModule,
    DemoRoutingModule,
    
  ],
  exports: [
    DemoComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
})
export class DemoModule { }
