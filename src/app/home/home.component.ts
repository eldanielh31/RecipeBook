import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../shared/recipe.service';
import { RecipeModel } from '../shared/recipe-model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  recipes : Array<RecipeModel> =[];
  isRecipes : Boolean;

  constructor(private activateRoute: ActivatedRoute, private recipeService : RecipeService,private router: Router) {
    
   }
  /**
   * The function is called when the component is initialized. It gets the filter parameter from the
   * URL and then gets the list of recipes from the service. If the filter parameter is present, it
   * filters the list of recipes by the filter parameter. If the filter parameter is not present, it
   * sets the list of recipes to the unfiltered list of recipes. Finally, it sets the isRecipes
   * variable to true if the list of recipes is empty
   */
  ngOnInit(): void {

    let filter = this.activateRoute.snapshot.params.filter;

    let listRecipes = this.recipeService.getRecipes();

    /* If the filter parameter is present, it filters the list of recipes by the filter parameter. If
    the filter parameter is not present, it sets the list of recipes to the unfiltered list of
    recipes. */
    filter ? this.recipes = listRecipes.filter(e => e.name.toLowerCase().includes(filter.toLowerCase())) : this.recipes = listRecipes;

    /* Reversing the order of the recipes. */
    this.recipes?.reverse();

    this.isRecipes = this.recipes?.length === 0;
    
  }

  /**
   * The function takes a recipe as an argument, and then navigates to the view-recipe route, passing
   * the recipe name as a parameter
   * @param {RecipeModel} recipe - RecipeModel - This is the recipe that was clicked on.
   */
  goToRecipe(recipe : RecipeModel): void {
    this.router.navigateByUrl('/view-recipe/' + recipe.name);
  }


}
