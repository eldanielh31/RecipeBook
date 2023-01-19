import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/shared/recipe.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent implements OnInit {

  /* A type assertion. It is telling the compiler that the recipeForm variable is of type FormGroup. */
  recipeForm !: FormGroup;

  constructor(private recipeService: RecipeService, private router: Router, private readonly fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.recipeForm = this.initForm();
  }
  /**
   * We take the values from the form and create a recipe object
   */
  createRecipe() {

    let name = this.recipeForm.value.name;
    let ingredients = this.recipeForm.value.ingredients.split('-').filter((str) => str !== '');
    let description = this.recipeForm.value.description;
    let picUrl = this.recipeForm.value.picUrl;
    
    /* It splits the string into an array of strings, and then filters out any empty strings. */
    let steps = this.recipeForm.value.steps.split('-').filter((str) => str !== '');

    let recipe = { name, ingredients, description, picUrl, steps };

    this.recipeService.addRecipe(recipe);

  }

  /**
   * It returns a new FormGroup object with the properties ingredients, name, description, picUrl, and
   * steps
   * @returns A form group with the following properties: ingredients, name, description, picUrl, and
   * steps.
   */
  initForm(): FormGroup {
    return this.fb.group({
      ingredients: [''],
      name: [''],
      description: [''],
      picUrl: [''],
      steps: [''],
    })
  }

}
