import { NgModule,NO_ERRORS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreComponent } from './core.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CoreRoutingModule } from './core-routing.module';
import { MenuModule } from './pages/menu/menu.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FooterComponent } from './footer/footer.component';
import { MenuNavComponent } from './menu-nav/menu-nav.component';


@NgModule({
  declarations: [CoreComponent, TopNavComponent, HomePageComponent, FooterComponent, MenuNavComponent],
  imports: [
    CommonModule,
    MenuModule,
    CoreRoutingModule,
    MDBBootstrapModule,
  ],
  schemas: [ NO_ERRORS_SCHEMA ],

  exports: [ CoreComponent ]

})
export class CoreModule { }

