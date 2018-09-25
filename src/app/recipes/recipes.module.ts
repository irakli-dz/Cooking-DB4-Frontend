import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListingComponent } from './components/recipe-listing/recipe-listing.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [RecipeListingComponent],
  exports: [RecipeListingComponent]
})
export class RecipesModule { }
