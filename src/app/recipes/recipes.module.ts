import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListingComponent } from './components/recipe-listing/recipe-listing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { HttpClientModule } from '@angular/common/http';
import { RecipeService } from './services/recipe.service';
import { RecipeFormComponent } from './components/recipe-form/recipe-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [RecipeListingComponent, RecipeFormComponent],
  exports: [RecipeListingComponent],
  providers: [RecipeService]
})
export class RecipesModule { }
