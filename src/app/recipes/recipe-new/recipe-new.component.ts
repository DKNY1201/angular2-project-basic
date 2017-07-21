import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Data} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {RecipesService} from "../recipes.service";

@Component({
  selector: 'app-recipe-new',
  templateUrl: './recipe-new.component.html',
  styleUrls: ['./recipe-new.component.css']
})
export class RecipeNewComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private recipeService: RecipesService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (data: Data) => {
        this.id = +data['id'];
        this.editMode = data['id'] != null;
      }
    );
    this.initForm();
  }

  initForm() {
    let recipeName = '';
    let recipeDescription = '';
    let recipeImgPath = '';

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeDescription = recipe.description;
      recipeImgPath = recipe.imagePath;
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'description': new FormControl(recipeDescription),
      'imagepath': new FormControl(recipeImgPath)
    })
  }

}
