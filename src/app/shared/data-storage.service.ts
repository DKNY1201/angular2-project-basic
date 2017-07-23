import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {RecipesService} from "../recipes/recipes.service";
import 'rxjs/Rx'
import {Recipe} from "../recipes/recipe.model";

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private recipesService: RecipesService){}

  storageRecipe() {
    return this.http.put('https://recipe-book-8811d.firebaseio.com/recipesdata.json', this.recipesService.getRecipes());
  }

  getRecipe() {
    return this.http.get('https://recipe-book-8811d.firebaseio.com/recipesdata.json').subscribe((response: Response) => {
      const recipes: Recipe[] = response.json();
      this.recipesService.setRecipes(recipes);
    });
  }
}
