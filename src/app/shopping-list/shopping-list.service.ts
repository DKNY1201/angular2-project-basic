import {Subject} from "rxjs/Subject";

import { Ingredient } from "app/shared/ingredient.model";

export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomato', 10)
    ];

    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditting = new Subject<number>();

    getIngredients() {
        return this.ingredients.slice();
    }

    getIngredient(index: number) {
      return this.ingredients[index];
    }

    addIngredient(ingredient: Ingredient) {
        for (let ing of this.ingredients) {
            if (ing.name == ingredient.name) {
                ing.amount = ing.amount + ingredient.amount;
                return;
            }
        }
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.getIngredients());
    }

    addIngredients(ingredients: Ingredient[]) {
        // this.ingredients.push(...ingredients);
        ingredients.forEach(ingredient => {
            this.addIngredient(ingredient);
        });
        this.ingredientsChanged.next(this.getIngredients());
    }

}
