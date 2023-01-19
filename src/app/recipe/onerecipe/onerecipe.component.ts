import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/shared/recipe.service';
import { RecipeModel } from 'src/app/shared/recipe-model';

@Component({
  selector: 'app-onerecipe',
  templateUrl: './onerecipe.component.html',
  styleUrls: ['./onerecipe.component.css']
})
export class OnerecipeComponent {

  recipeName: String;
  recipe: RecipeModel;
  listIngredients = [];


  constructor(private activateRoute: ActivatedRoute, private recipeService: RecipeService) {
    this.recipeName = this.activateRoute.snapshot.params.id;
    this.recipe = recipeService.getRecipes().find(e => e.name === this.recipeName);

    /* Iterating over the ingredients array and pushing a new object to the listIngredients array. */
    this.recipe.ingredients.forEach(x => this.listIngredients.push({ name: x, done: false }));
  }
  /**
   * The function returns the steps property of the recipe object
   * @returns The steps array from the recipe object.
   */
  get steps(): Array<String> {
    return this.recipe.steps;
  }
  /**
   * When the user clicks on an ingredient, the function will toggle the done property of the
   * ingredient
   * @param index - the index of the ingredient in the list
   */
  onClickIngredient(index) {
    this.listIngredients[index].done = !this.listIngredients[index].done;
  }
}
