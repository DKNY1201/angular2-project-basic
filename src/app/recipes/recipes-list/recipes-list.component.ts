import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes : Recipe[] = [
    new Recipe('Chicken Sause', 'Chicken with sauce', 'https://www.fiveyou.com/wp-content/uploads/2017/04/Soy_Sauce_Chicken.jpg'),
    new Recipe('Pork meat', 'Pork meat with flavor', 'http://www.seriouseats.com/recipes/assets_c/2014/08/20140731-meat-hook-meat-book-chinese-bbq-pork-michael-harlan-turkell-thumb-1500xauto-408548.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
