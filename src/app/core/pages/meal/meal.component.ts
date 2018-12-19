import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DatabaseService } from '../../../shared/database.service';
import { ActivatedRoute } from '@angular/router';
import { DishItem } from '../../../shared/model/dish-item'
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit, AfterViewInit {

  dish:Observable<DishItem>;
  routInfo:any;
  url: any;

  constructor(
    private db: DatabaseService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
   
    this.route.paramMap.subscribe(params =>{
      const dishId = params.get('mealId');
      const category = params.get('category')
      this.routInfo = { dishId, category }
      this.dish = this.db.getDish(dishId, category)
    })
  }
  
  ngAfterViewInit(){
    this.url = window.location.href
    console.log(this.url)
  }
}
