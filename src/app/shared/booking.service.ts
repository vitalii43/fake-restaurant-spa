import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, observable, of,forkJoin, range, from } from 'rxjs';
import { map, switchMap, concatAll, concat, zip,concatMap, mergeMap, combineLatest, combineAll  } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  dateQuery = new Subject<string>();
  reservedTablesInfo: any;
  constructor(
    auth: AuthService,
    private db : AngularFirestore,
    private http: HttpClient 
  ) { 
    this.reservedTablesInfo = this.dateQuery.pipe(
      switchMap(date=>{
        return range(0,17).pipe(
          map(i=>{
            return this.db.collection<any>(`tables/${i}/booking`,ref => ref.where('date', '==', date)).snapshotChanges()
              .pipe(
                map(actions => actions.map(a =>{
                  const data = a.payload.doc.data();
                  const id = a.payload.doc.id;
                  return {id, ...data } 
                }))
              )                                   
            
           }),
           combineAll()
        )
         
      }),
      
    )           
    
  }

  bookTable(bookDetails){
    const bookingCollection = this.db.collection<any>(`tables/${bookDetails.table}/booking`);
    bookingCollection.add(bookDetails)
  }

  editTableBooking(editTableDetails, id){
    const table = this.db.doc<any>(`tables/${editTableDetails.table}/booking/${id}`)
    table.update(editTableDetails);
  }
  deleteTableBooking(editTableDetails, id){
    const table = this.db.doc<any>(`tables/${editTableDetails.table}/booking/${id}`)
    table.delete();
  }
}
/*
export class AppComponent {
  private itemDoc: AngularFirestoreDocument<Item>;
  item: Observable<Item>;
  constructor(private afs: AngularFirestore) {
    this.itemDoc = afs.doc<Item>('items/1');
    this.item = this.itemDoc.valueChanges();
  }
  update(item: Item) {
    this.itemDoc.update(item);
  }
}
*/ 