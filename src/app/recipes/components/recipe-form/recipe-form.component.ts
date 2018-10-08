import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RecipeService } from '../../services/recipe.service';
import { SimpleSnackBar, MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { Recipe } from '../../models/recipe';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})
export class RecipeFormComponent implements OnInit {

  private _recipe: Recipe;
  recipeForm: FormGroup;
  constructor(private fb: FormBuilder, private recipeService: RecipeService,
    public snackBar: MatSnackBar,
    private reouter: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.createForm();
    this.setRecipeToForm();
  }

  onSubmit() {
    // user wants to edit the Recipe
    if (this._recipe) {
      console.log(this.recipeForm.value);
      this.recipeService.updateRecipe(this._recipe._id, this.recipeForm.value)
      .subscribe(data => {
        this.snackBar.open('Recipe Updated', 'Success', {
          duration: 2000
        });
        this.reouter.navigate(['dashboard', 'recipes']);
      }, err => this.errorHandler(err, 'Faield to update the recipe'));
    }
    else {
      this.recipeService.createRecipe(this.recipeForm.value).subscribe(
        data => {
          this.snackBar.open('Recipe Created', 'Success', {
            duration: 2000
          });
          this.recipeForm.reset();
          this.reouter.navigate(['dashboard', 'recipes']);
        },
        err => {
          console.error(err);
        }
      );
    }
  }

  setRecipeToForm() {
    this.route.params
      .subscribe(params => {
        let id = params['id'];
        if (!id) {
          return;
        }
        this.recipeService.getRecipeById(id)
          .subscribe(recipe => {
            this._recipe = recipe;
            this.recipeForm.patchValue(this._recipe);
          }, err => this.errorHandler(err, 'Faield to find Recipe'));
      });

  }

  createForm() {
    this.recipeForm = this.fb.group({
      item: '',
      type: '',
      cousine: '',
      rate: '',
      ingredients: ''
    });
  }

  private errorHandler(error, message) {
    console.log(error);
    this.snackBar.open(message, 'Error', {
      duration: 2000
    });
  }
}
