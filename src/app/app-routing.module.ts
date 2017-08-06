import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {HomeComponent} from "./core/home/home.component";
import {SigninComponent} from "./auth/signin/signin.component";
import {SignupComponent} from "./auth/signup/signup.component";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipes', loadChildren: './recipes/recipes.module#RecipeModule' },
  { path: 'shopping-list', component: ShoppingListComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'signin', component: SigninComponent}
  // { path: 'not-found', component: NotFoundComponent, data: {'message': 'Opps! Page not found!'}},
  // { path: '**', redirectTo: 'not-found' }
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
