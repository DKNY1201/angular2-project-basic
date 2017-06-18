import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from "app/recipes/recipes.service";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[];
  // private recipesService: RecipesService;

  constructor(private recipesService: RecipesService) {
    // this.recipesService = recipesService;
  }

  ngOnInit() {
    this.recipes = this.recipesService.getRecipes();
  }

}
