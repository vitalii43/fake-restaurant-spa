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
  mealsObservable:Observable<any[]>;
  meals: any[];

  menuDemo:Observable<any[]>;
  constructor(private route: ActivatedRoute,
              private firebase: DatabaseService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      const category = params.get('category')
      this.firebase.getCategory(category).subscribe(meals=>{
        this.meals = meals;
        console.log(this.meals)
      })    
    })
    //this.mealsObservable.
  }
  sortMenu(event){
    console.log(event)
    const sortType = event.target.value;

    this.meals = this.meals.sort((a,b)=>{
      if(sortType == 'price-up') return a.price - b.price;
      if(sortType == 'price-down') return b.price - a.price;
      if(sortType == 'weight-up') return a.weight - b.weight;
      if(sortType == 'weight-down') return b.weight - a.weight;
    })
  }
}

