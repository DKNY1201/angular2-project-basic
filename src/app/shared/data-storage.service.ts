import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {RecipesService} from "../recipes/recipes.service";
import 'rxjs/Rx'
import {Recipe} from "../recipes/recipe.model";
import {AuthService} from "../auth/auth.service";

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private recipesService: RecipesService, private authService: AuthService){}

  storageRecipe() {
    const token = this.authService.getToken();
    return this.http.put('https://recipe-book-8811d.firebaseio.com/recipesdata.json?auth=' + token, this.recipesService.getRecipes());
  }

  getRecipe() {
    const token = this.authService.getToken();
    return this.http.get('https://recipe-book-8811d.firebaseio.com/recipesdata.json?auth=' + token)
      .map((response: Response) => {
        const recipes: Recipe[] = response.json();
        for (let recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
            console.log(recipe);
          }
        }
        return recipes;
      })
      .subscribe((recipes: Recipe[]) => {
        this.recipesService.setRecipes(recipes);
      }
    );
  }
}
