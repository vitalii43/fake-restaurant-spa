import { Component, OnInit, ViewChild } from '@angular/core';

import { AuthService } from 'src/app/shared/auth.service';
import { BookingService } from 'src/app/shared/booking.service';
import { BookingModalComponent } from './booking-modal/booking-modal.component';
import { Observable } from 'rxjs';
import { ToastrManager } from 'ng6-toastr-notifications';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

 
  @ViewChild(BookingModalComponent) private modal: BookingModalComponent;

  modalOpened: boolean = false;
  user: any;
 //y-m-d
  private curentDate = new Date();
  dateToBook = `${this.curentDate.getFullYear()}-${this.curentDate.getMonth()}-${this.curentDate.getDate()}`;
  minDate = `${this.curentDate.getFullYear()}-${this.curentDate.getMonth()}-${this.curentDate.getDate()}`;
  modalTableNumber: any;
  reservedTables = [];
  bookedTableDetails: any;
  editTableMod: boolean = false;
  modalAdminMod: boolean = false;

  constructor(
    private auth: AuthService,
    private booking: BookingService,
    private toastr: ToastrManager
  ) { 
    this.booking.reservedTablesInfo.subscribe(
      tables=>{
        //console.log(tables)
        this.reservedTables = tables.map(val=>{
          return val[0]
        })                
      }
    ) 
  }
 

  ngOnInit() {
    
    this.booking.dateQuery.next(this.dateToBook)
    //console.log(this.reservedTables )
    this.auth.user.subscribe(user=>{
      this.user = user
    })
  }

  openBookingModal(tableNumber){

    //console.log(tableNumber,this.modal, this.reservedTables)
    
    if ( !this.user ) { this.toastr.errorToastr('Спершу авторизуйтесь', 'Oops!'); return }
    else if(this.user.uid == this.auth.admin.uid && this.reservedTables[tableNumber]){
      this.modalAdminMod = true;
      this.bookedTableDetails = this.reservedTables[tableNumber];
      this.modalTableNumber = tableNumber;
      this.editTableMod = true;
      this.modalOpened = true;  
    }

    if ( !this.reservedTables[tableNumber] && this.user.uid != this.auth.admin.uid) {
      this.modalTableNumber = tableNumber;
      this.modalOpened = true;  
    }
    // edit booked table 
    if ( this.reservedTables[tableNumber] && 
        this.reservedTables[tableNumber].user.uid == this.user.uid && 
        this.user.uid != this.auth.admin.uid) {

      this.bookedTableDetails = this.reservedTables[tableNumber];
      this.modalTableNumber = tableNumber;
      this.editTableMod = true;
      this.modalOpened = true;  
      //console.log(this.bookedTableDetails)
    }
  }

  closeModal(){
    this.modalAdminMod = false;
    this.modalOpened = false;
    this.editTableMod = false;
    this.bookedTableDetails = {};
  }

  dateChange(){
    //console.log(this.dateToBook)
    this.booking.dateQuery.next(this.dateToBook)

  }

  private updateReservedTables(date){

  }
}
