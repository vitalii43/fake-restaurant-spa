import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CoreComponent } from './core.component';
import { MenuComponent } from './pages/menu/menu.component';
import { BookingComponent } from './pages/booking/booking.component';
import { ContactComponent } from './pages/contact/contact.component';

const coreRoutes: Routes = [
    {
        path: '',
        component: CoreComponent,
        children: [
            {
                path:'',
                pathMatch: 'full',
                redirectTo: 'home'
            },
            {
                path: 'home',
                component: HomePageComponent
            },
            {
                path: 'menu',
                component: MenuComponent
            },
            {
                path: 'reservation',
                component: BookingComponent
            },
            {
                path: 'contact',
                component: ContactComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(coreRoutes)],
    exports: [RouterModule]
})
export class CoreRoutingModule {}