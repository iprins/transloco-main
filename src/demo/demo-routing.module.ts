import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslocoRootModule } from 'src/app/transloco-root.module';

import { DemoComponent } from './demo.component';

const routes = [
  {
    path: '',
    component: DemoComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    TranslocoRootModule.forChild()
  ],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
