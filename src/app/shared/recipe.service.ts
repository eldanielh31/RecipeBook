import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeModel } from './recipe-model';
import { StorageService } from '../storage.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
 
  constructor(private http: HttpClient, private storageService : StorageService) { }

  getRecipes(){
    return JSON.parse(this.storageService.getData('recipes') ? this.storageService.getData('recipes') : '[]');
  }
  addRecipe(recipe : RecipeModel){
    console.log(recipe)
    let recipes = JSON.parse(this.storageService.getData('recipes') ? this.storageService.getData('recipes') : '[]');

    recipes.push(recipe);
    
    this.storageService.saveData('recipes', JSON.stringify(recipes));
  }

}
