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
import { MealComponent } from './pages/meal/meal.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { BookingComponent } from './pages/booking/booking.component';
import { BookingModule } from './pages/booking/booking.module';
import { ToastrModule } from 'ng6-toastr-notifications';

import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { ContactComponent } from './pages/contact/contact.component';
declare var Hammer: any;

export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any> {
    'pan': { direction: Hammer.DIRECTION_All },
    'swipe': { direction: Hammer.DIRECTION_VERTICAL },
  };

  buildHammer(element: HTMLElement) {
    const mc = new Hammer(element, {
      touchAction: 'auto',
          inputClass: Hammer.SUPPORT_POINTER_EVENTS ? Hammer.PointerEventInput : Hammer.TouchInput,
          recognizers: [
            [Hammer.Swipe, {
              direction: Hammer.DIRECTION_HORIZONTAL
            }]
          ]
    });
    return mc;
  }
}

@NgModule({
  declarations: [
    CoreComponent, 
    TopNavComponent, 
    HomePageComponent, 
    FooterComponent, 
    MenuNavComponent, 
    MealComponent, ContactComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MenuModule,
    CoreRoutingModule,
    MDBBootstrapModule,
    SharedModule,
    BookingModule,
    ToastrModule.forRoot(),
  ],
  schemas: [ NO_ERRORS_SCHEMA ],

  exports: [ 
    CoreComponent,
    MealComponent,
  ],
  providers:[
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    }
  ]

})
export class CoreModule { }

