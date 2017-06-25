import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from "app/recipes/recipe.model";
import { RecipesService } from "app/recipes/recipes.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  @Input('recipeDetailData') recipeDetail: Recipe;

  constructor(private recipesService: RecipesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.recipeDetail = this.recipesService.getRecipe(params['name']);
      }
    );
  }

  onAddToShoppingList() {
    this.recipesService.addIngredientsToShoppingList(this.recipeDetail.ingredients);
  }

}
