import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { 
  AngularFirestore, 
  AngularFirestoreCollection, 
  AngularFirestoreDocument 
} from 'angularfire2/firestore';
import { MealItem } from './model/meal-item'
@Injectable({
  providedIn: 'root'
})

export class DatabaseService {
  
  itemsCollection: AngularFirestoreCollection<MealItem>;
  items: Observable<MealItem[]>
  constructor(private db : AngularFirestore) { 
    this.itemsCollection = db.collection<MealItem>('pizza');
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a =>{
        const data = a.payload.doc.data() as MealItem;
        const id = a.payload.doc.id;
        return {id, ...data } 
      }))
    );
  }
   
  
}
