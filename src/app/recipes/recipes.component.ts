import { Component, OnInit } from '@angular/core';
import { Recipe } from "app/recipes/recipe.model";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipeDetail: Recipe;

  onRecipeItemSelected(recipe: Recipe) {
    this.recipeDetail = recipe;
  }

  constructor() { }

  ngOnInit() {
  }

}
