import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { DatabaseService } from '../../shared/database.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  meals=[
    {
      img : '/assets/images/pepperoni.jpeg',
      name: 'pizza',
      weight: '420g',
      description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
      price: 123
    },
    
    {
      img : '/assets/images/pepperoni.jpeg',
      name: 'pizza',
      weight: '420g',
      description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
      price: 123
    },
    
    {
      img : '/assets/images/pepperoni.jpeg',
      name: 'pizza',
      weight: '420g',
      description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
      price: 123
    },
    
    {
      img : '/assets/images/pepperoni.jpeg',
      name: 'pizza',
      weight: '420g',
      description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
      price: 123
    },
    
    {
      img : '/assets/images/pepperoni.jpeg',
      name: 'pizza',
      weight: '420g',
      description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
      price: 123
    },
    
    {
      img : '/assets/images/pepperoni.jpeg',
      name: 'pizza',
      weight: '420g',
      description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
      price: 123
    },
    
    {
      img : '/assets/images/pepperoni.jpeg',
      name: 'pizza',
      weight: '420g',
      description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
      price: 123
    },
    
    {
      img : '/assets/images/pepperoni.jpeg',
      name: 'pizza',
      weight: '420g',
      description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
      price: 123
    },
    
    {
      img : '/assets/images/pepperoni.jpeg',
      name: 'pizza',
      weight: '420g',
      description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
      price: 123
    },
    
    {
      img : '/assets/images/pepperoni.jpeg',
      name: 'pizza',
      weight: '420g',
      description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
      price: 123
    },
    
    {
      img : '/assets/images/pepperoni.jpeg',
      name: 'pizza',
      weight: '420g',
      description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
      price: 123
    },
    
    {
      img : '/assets/images/pepperoni.jpeg',
      name: 'pizza',
      weight: '420g',
      description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
      price: 123
    },
    
    {
      img : '/assets/images/pepperoni.jpeg',
      name: 'pizza',
      weight: '420g',
      description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
      price: 123
    },
    
    {
      img : '/assets/images/pepperoni.jpeg',
      name: 'pizza',
      weight: '420g',
      description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
      price: 123
    },
    
    {
      img : '/assets/images/pepperoni.jpeg',
      name: 'pizza',
      weight: '420g',
      description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
      price: 123
    },
    
    {
      img : '/assets/images/pepperoni.jpeg',
      name: 'pizza',
      weight: '420g',
      description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
      price: 123
    },
    
    {
      img : '/assets/images/pepperoni.jpeg',
      name: 'pizza',
      weight: '420g',
      description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
      price: 123
    },
    
    {
      img : '/assets/images/pepperoni.jpeg',
      name: 'pizza',
      weight: '420g',
      description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
      price: 123
    },
    
    {
      img : '/assets/images/pepperoni.jpeg',
      name: 'pizza',
      weight: '420g',
      description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
      price: 123
    },
    
    {
      img : '/assets/images/pepperoni.jpeg',
      name: 'pizza',
      weight: '420g',
      description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
      price: 123
    },
    
    {
      img : '/assets/images/pepperoni.jpeg',
      name: 'pizza',
      weight: '420g',
      description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
      price: 123
    },
    
    {
      img : '/assets/images/pepperoni.jpeg',
      name: 'pizza',
      weight: '420g',
      description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
      price: 123
    },
    
    {
      img : '/assets/images/pepperoni.jpeg',
      name: 'pizza',
      weight: '420g',
      description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
      price: 123
    },
    
    {
      img : '/assets/images/pepperoni.jpeg',
      name: 'pizza',
      weight: '420g',
      description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
      price: 123
    },
    
    {
      img : '/assets/images/pepperoni.jpeg',
      name: 'pizza',
      weight: '420g',
      description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
      price: 123
    },
    
    {
      img : '/assets/images/pepperoni.jpeg',
      name: 'pizza',
      weight: '420g',
      description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
      price: 123
    },
    
    {
      img : '/assets/images/pepperoni.jpeg',
      name: 'pizza',
      weight: '420g',
      description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
      price: 123
    },
    
    {
      img : '/assets/images/pepperoni.jpeg',
      name: 'pizza',
      weight: '420g',
      description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
      price: 123
    },
    
    {
      img : '/assets/images/pepperoni.jpeg',
      name: 'pizza',
      weight: '420g',
      description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
      price: 123
    },
    
    {
      img : '/assets/images/pepperoni.jpeg',
      name: 'pizza',
      weight: '420g',
      description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
      price: 123
    },
    
    {
      img : '/assets/images/pepperoni.jpeg',
      name: 'pizza',
      weight: '420g',
      description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
      price: 123
    },
    
    {
      img : '/assets/images/pepperoni.jpeg',
      name: 'pizza',
      weight: '420g',
      description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
      price: 123
    },
    
    {
      img : '/assets/images/pepperoni.jpeg',
      name: 'pizza',
      weight: '420g',
      description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
      price: 123
    },
    
    {
      img : '/assets/images/pepperoni.jpeg',
      name: 'pizza',
      weight: '420g',
      description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
      price: 123
    },
    
       
  ]
  menuDemo:any;
  constructor(private route: ActivatedRoute,
              private firebase: DatabaseService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      console.log(params.get('category'))
    })
    this.firebase.items.subscribe( data =>{
      console.log(data)
    })
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