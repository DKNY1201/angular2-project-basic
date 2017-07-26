import { Component } from "@angular/core";
import {Response} from "@angular/http";
import {DataStorageService} from "../shared/data-storage.service";
import {RecipesService} from "../recipes/recipes.service";
import {AuthService} from "../auth/auth.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {

  constructor(private dataStorageService: DataStorageService,
              private recipesService: RecipesService,
              private authService: AuthService) {}

  onSaveData() {
    this.dataStorageService.storageRecipe().subscribe(
      (response: Response) => console.log(response),
      (error: Response) => console.log(error)
    );
  }

  onFetchData() {
    this.dataStorageService.getRecipe();
  }

  onLogout() {
    this.authService.logout();
  }
}
