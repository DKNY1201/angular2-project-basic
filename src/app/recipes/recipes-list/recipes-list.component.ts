import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes : Recipe[] = [
    new Recipe('Chicken Sause', 'Chicken with sauce', 'https://static.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg'),
    new Recipe('Pork meat', 'Pork meat with flavor', 'http://www.seriouseats.com/recipes/assets_c/2014/08/20140731-meat-hook-meat-book-chinese-bbq-pork-michael-harlan-turkell-thumb-1500xauto-408548.jpg')
  ];

  @Output() recipeItemSelected = new EventEmitter();

  onRecipeItemSelected(recipe: Recipe) {
    this.recipeItemSelected.emit(recipe);
  }

  constructor() { }

  ngOnInit() {
  }

}
