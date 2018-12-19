import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { DatabaseService } from '../../../shared/database.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  meals:Observable<any[]>;
  /*meals:any = [
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
  */
  menuDemo:Observable<any[]>;
  constructor(private route: ActivatedRoute,
              private firebase: DatabaseService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      console.log(params.get('category'))
      const category = params.get('category')
      this.meals = this.firebase.getCategory(category)
      this.firebase.getCategory(category).subscribe(res=>{
        console.log('firestore colection', res)
      })
      
    })
    
  }
  
}

