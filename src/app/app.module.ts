import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { OnerecipeComponent } from './recipe/onerecipe/onerecipe.component';
import { CreateRecipeComponent } from './recipe/create-recipe/create-recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    OnerecipeComponent,
    CreateRecipeComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }