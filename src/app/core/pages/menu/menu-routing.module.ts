import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from './menu.component';
import { CoreComponent } from '../../core.component';
import { MealComponent } from '../meal/meal.component';

const routes: Routes = [
  {
    path: 'menu',
    component: CoreComponent,
    children: [
      {
        path:':category/:mealId',
        component: MealComponent
      },  
      {
        path: ':category',
        component: MenuComponent
      },
      {
        path: '',
        redirectTo: 'pizza',
        pathMatch: 'full'        
      }   
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
