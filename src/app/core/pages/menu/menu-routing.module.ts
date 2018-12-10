import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from './menu.component';
import { CoreComponent } from '../../core.component';

const routes: Routes = [
  {
    path: 'menu',
    component: CoreComponent,
    children: [
      {
        path: '',
        redirectTo: 'pizza',
        pathMatch: 'full',
        
      },
      {
        path: ':category',
        component: MenuComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
