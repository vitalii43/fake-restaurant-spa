import { Component, OnInit, Output, EventEmitter, OnChanges, SimpleChange, Input } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/shared/booking.service';

@Component({
  selector: 'app-booking-modal',
  templateUrl: './booking-modal.component.html',
  styleUrls: ['./booking-modal.component.scss']
})
export class BookingModalComponent implements OnInit, OnChanges {
  
  @Output() hideComponent = new EventEmitter<boolean>();
  @Input() tableNumber: any;
  @Input() dateToBook: any;
  @Input() editTableMod: boolean;
  @Input() bookedTableDetails: any;
  @Input() modalAdminMod: any

  modalForm: FormGroup;
  phoneNumber: string;
  timeBook: any;
  
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private booking: BookingService
    ) { 
    this.modalForm = fb.group({
      'phoneNumber' : [null, 
        Validators.compose([
          Validators.required,
          Validators.pattern(/[0-9]{10}$/i)
        ])
      ],
      'timeBook' : [null, Validators.required],
    })
  }
  
  ngOnInit() {
    //console.log(`table = ${this.table}`)
  }
  ngOnChanges(changes: any){
    //console.log(changes)
  } 
  close(){
    this.hideComponent.emit(true)
  }
  modalSubmit(res){
    this.auth.user.subscribe(user =>{
      
      const tableBook = {
        user: {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,          
        }, 
        ...res,
        table: this.tableNumber,
        date: this.dateToBook 
      }

      console.log('modalSubmit',tableBook, res)

      if (this.editTableMod){
        this.booking.editTableBooking(tableBook, this.bookedTableDetails.id)
      }else{
        this.booking.bookTable(tableBook)
      }

      this.close()
      this.modalForm.reset();
    })
  }
  deleteBooking(){
    this.booking.deleteTableBooking(this.bookedTableDetails, this.bookedTableDetails.id)
    console.log('bookedTableDetails',this.bookedTableDetails)
  }
}
