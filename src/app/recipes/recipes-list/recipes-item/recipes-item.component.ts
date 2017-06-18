import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from "app/recipes/recipe.model";
import { RecipesService } from "app/recipes/recipes.service";

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  @Input('recipeItemData') recipe: Recipe;

  onRecipeClick() {
    this.recipesService.recipeSelected.emit(this.recipe);
  }

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
  }

}
