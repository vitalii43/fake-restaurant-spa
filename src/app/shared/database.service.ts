import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { 
  AngularFirestore, 
  AngularFirestoreCollection, 
  AngularFirestoreDocument 
} from 'angularfire2/firestore';

import { DishItem } from './model/dish-item';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {
  
  constructor(
    private db : AngularFirestore,
    private http: HttpClient    
    ) { }

  getCategory(category):Observable<DishItem[]>{

    let itemsCollection = this.db.collection<DishItem>(category);
    
    return itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a =>{
        const data = a.payload.doc.data() as DishItem;
        const id = a.payload.doc.id;
        return {id, ...data } 
      }))
    );
  }   
  getDish(dishId, category):Observable<DishItem>{
    let dishDoc = this.db.doc<DishItem>(`${category}/${dishId}`);
    return dishDoc.valueChanges();
  }
 
}
/*addItem(name: string) {
    // Persist a document id
    const id = this.afs.createId();
    const item: Item = { id, name };
    this.itemsCollection.doc(id).set(item);
  }
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