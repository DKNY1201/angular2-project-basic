import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";


import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {RecipesDetailComponent} from "./recipes/recipes-detail/recipes-detail.component";
import {RecipeStartComponent} from "./recipes/recipe-start/recipe-start.component";
import {RecipeNewComponent} from "./recipes/recipe-new/recipe-new.component";
import {SignupComponent} from "./auth/signup/signup.component";

const appRoutes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, children: [
    { path: '', component: RecipeStartComponent},
    { path: 'new', component: RecipeNewComponent},
    { path: ':id', component: RecipesDetailComponent},
    { path: ':id/edit', component: RecipeNewComponent}
  ] },
  { path: 'shopping-list', component: ShoppingListComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'not-found', component: NotFoundComponent, data: {'message': 'Opps! Page not found!'}},
  { path: '**', redirectTo: 'not-found' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})


export class AppRoutingModule {}
