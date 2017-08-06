import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

import {RecipeNewComponent} from "./recipe-new/recipe-new.component";
import {RecipesComponent} from "./recipes.component";
import {RecipesDetailComponent} from "./recipes-detail/recipes-detail.component";
import {RecipesItemComponent} from "./recipes-list/recipes-item/recipes-item.component";
import {RecipesListComponent} from "./recipes-list/recipes-list.component";
import {RecipeStartComponent} from "./recipe-start/recipe-start.component";
import {DropdownDirective} from "../shared/dropdown.directive";

@NgModule({
  declarations: [
    RecipeNewComponent,
    RecipesComponent,
    RecipesDetailComponent,
    RecipesItemComponent,
    RecipesListComponent,
    RecipeStartComponent,
    DropdownDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})

export class RecipeModule {

}
