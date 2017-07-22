import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from "app/recipes/recipes.service";
import {ActivatedRoute, Data, Router} from "@angular/router";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipesService: RecipesService,
              private router: Router,
              private route: ActivatedRoute) {
    this.recipesService.recipeChange.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
    });
  }

  ngOnInit() {
    this.recipes = this.recipesService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
