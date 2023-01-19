import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { OnerecipeComponent } from './recipe/onerecipe/onerecipe.component';
import { CreateRecipeComponent } from './recipe/create-recipe/create-recipe.component';


const routes: Routes = [
  { path: "home/:filter", component : HomeComponent},
  { path: "home", component: HomeComponent },
  { path: "view-recipe/:id", component : OnerecipeComponent},
  { path: "create-recipe", component : CreateRecipeComponent},
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: '/home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
