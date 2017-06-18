import { Output, EventEmitter } from "@angular/core";

import { Recipe } from "app/recipes/recipe.model";


export class RecipesService {
    private recipes: Recipe[] = [
        new Recipe('Chicken Sause', 'Chicken with sauce', 'https://static.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg'),
        new Recipe('Pork meat', 'Pork meat with flavor', 'http://www.seriouseats.com/recipes/assets_c/2014/08/20140731-meat-hook-meat-book-chinese-bbq-pork-michael-harlan-turkell-thumb-1500xauto-408548.jpg')
    ];

    @Output() recipeSelected = new EventEmitter<Recipe>();

    getRecipes() {
        return this.recipes.slice();
    }

}