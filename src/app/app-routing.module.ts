import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";


import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {RecipesDetailComponent} from "./recipes/recipes-detail/recipes-detail.component";
import {RecipeStartComponent} from "./recipes/recipe-start/recipe-start.component";

const appRoutes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, children: [
    { path: '', component: RecipeStartComponent},
    { path: ':name', component: RecipesDetailComponent}
  ] },
  { path: 'shopping-list', component: ShoppingListComponent},
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
