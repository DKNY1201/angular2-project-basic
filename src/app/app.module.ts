import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { MyTestDirective } from "app/my-test/my-test.directive";
import { MyTestComponent } from "app/my-test/my-test.component";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from "./app-routing.module";
import {RecipesService} from "./recipes/recipes.service";
import {DataStorageService} from "./shared/data-storage.service";
import {AuthService} from "./auth/auth.service";
import {AuthGuard} from "./auth/auth-guard.service";
import {RecipeModule} from "./recipes/recipes.module";
import {SharedModule} from "./shared/shared.module";
import {AuthModule} from "./auth/auth.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    MyTestDirective,
    MyTestComponent,
    NotFoundComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    RecipeModule,
    AuthModule,
    SharedModule
  ],
  providers: [ShoppingListService, RecipesService, DataStorageService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
