import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";


import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {NotFoundComponent} from "./not-found/not-found.component";

const appRoutes: Routes = [
  { path: '', component: RecipesComponent },
  { path: 'recipes', component: RecipesComponent },
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
