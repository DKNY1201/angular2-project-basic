import { Output, EventEmitter, Injectable } from "@angular/core";

import { Recipe } from "app/recipes/recipe.model";
import { Ingredient } from "app/shared/ingredient.model";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";

@Injectable()
export class RecipesService {
    private recipes: Recipe[] = [
        new Recipe(
            'Chicken Sause',
            'Chicken with sauce',
            'https://static.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg',
            [
                new Ingredient("Chicken meat", 2),
                new Ingredient("Sauce", 4)
            ]
        ),
        new Recipe(
            'Pork meat',
            'Pork meat with flavor',
            'http://www.seriouseats.com/recipes/assets_c/2014/08/20140731-meat-hook-meat-book-chinese-bbq-pork-michael-harlan-turkell-thumb-1500xauto-408548.jpg',
            [
                new Ingredient("Pork meat", 2),
                new Ingredient("Peper", 4),
                new Ingredient("Chilly", 1),
                new Ingredient("Sallad", 1)
            ]
        )
    ];

    constructor(private shoppingListService: ShoppingListService) {

    }

    @Output() recipeSelected = new EventEmitter<Recipe>();

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    getRecipe(name: string) {
      const recipe = this.recipes.find(
        (rec) => {
          return rec.name === name;
        }
      )

      return recipe;
    }

}
