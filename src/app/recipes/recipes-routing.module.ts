import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {RecipesComponent} from "./recipes.component";
import {RecipeStartComponent} from "./recipe-start/recipe-start.component";
import {RecipeNewComponent} from "./recipe-new/recipe-new.component";
import {AuthGuard} from "../auth/auth-guard.service";
import {RecipesDetailComponent} from "./recipes-detail/recipes-detail.component";

const recipesRoute: Routes = [
  { path: '', component: RecipesComponent, children: [
    { path: '', component: RecipeStartComponent},
    { path: 'new', component: RecipeNewComponent, canActivate: [AuthGuard]},
    { path: ':id', component: RecipesDetailComponent},
    { path: ':id/edit', component: RecipeNewComponent, canActivate: [AuthGuard]}
  ] }
];

@NgModule({
  imports: [
    RouterModule.forChild(recipesRoute)
  ],
  exports: [RouterModule]
})

export class RecipeRoutingModule {}
