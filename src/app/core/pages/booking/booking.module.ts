import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingComponent } from './booking.component';
import { BookingModalComponent } from './booking-modal/booking-modal.component'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ToastrModule } from 'ng6-toastr-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    BookingComponent,
    BookingModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule,
    BrowserAnimationsModule
  ],
  exports: [
    BookingComponent
  ]
})
export class BookingModule { }
