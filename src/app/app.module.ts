import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MyTestDirective } from "app/my-test/my-test.directive";
import { MyTestComponent } from "app/my-test/my-test.component";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";
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
import {ShoppingListModule} from "./shopping-list/shopping-list.module";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MyTestDirective,
    MyTestComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    RecipeModule,
    AuthModule,
    ShoppingListModule,
    SharedModule
  ],
  providers: [ShoppingListService, RecipesService, DataStorageService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
