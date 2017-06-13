import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from "app/recipes/recipe.model";

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  @Input('recipeItemData') recipe: Recipe;
  @Output() recipeItemSelected = new EventEmitter<void>();

  onRecipeClick() {
    this.recipeItemSelected.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
