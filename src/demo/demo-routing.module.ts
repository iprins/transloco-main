import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslocoRootModule } from 'src/app/transloco-root.module';

import { DemoComponent } from './demo.component';

const loader = ['en'].reduce((acc: any, lang: string) => {
  acc[lang] = () => import(`../assets/i18n/${lang}.json`);
  return acc;
}, {});

const routes = [
  {
    path: '',
    component: DemoComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    TranslocoRootModule.forChild('core', loader)
  ],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
