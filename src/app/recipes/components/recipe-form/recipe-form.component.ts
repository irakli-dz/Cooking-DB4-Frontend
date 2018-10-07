import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})
export class RecipeFormComponent implements OnInit {

  recipeForm: FormGroup;
  constructor(private fb: FormBuilder, private recipeService: RecipeService) { }

  ngOnInit() {
    this.createForm();
  }

  onSubmit() {
   this.recipeService.createRecipe(this.recipeForm.value).subscribe (
     data=> {
       console.log(data);
     },
     err=>{
       console.error(err);
     }
   )
  }

  createForm() {
    this.recipeForm = this.fb.group({
      item: '',
      type: '',
      cousine: '',
      ingredients: '',
      rate: ''
    })
  }

}
