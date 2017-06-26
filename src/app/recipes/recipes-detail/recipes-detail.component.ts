import { Component, OnInit } from '@angular/core';
import { Recipe } from "app/recipes/recipe.model";
import { RecipesService } from "app/recipes/recipes.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  recipeDetail: Recipe;
  id: number;

  constructor(private recipesService: RecipesService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipeDetail = this.recipesService.getRecipe(this.id);
      }
    );
  }

  onAddToShoppingList() {
    this.recipesService.addIngredientsToShoppingList(this.recipeDetail.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
