import { Output, EventEmitter } from "@angular/core";

import { Ingredient } from "app/shared/ingredient.model";

export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomato', 10)
    ];

    @Output() ingredientsChanged = new EventEmitter<Ingredient[]>();

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        for (let ing of this.ingredients) {
            if (ing.name == ingredient.name) {
                ing.amount = ing.amount + ingredient.amount;
                return;
            }
        }
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.getIngredients());
    }

    addIngredients(ingredients: Ingredient[]) {
        // this.ingredients.push(...ingredients);
        ingredients.forEach(ingredient => {
            this.addIngredient(ingredient);
        });
        this.ingredientsChanged.emit(this.getIngredients());
    }

}