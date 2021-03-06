import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe, RecipePaginationRsp } from '../models/recipe';


const BASE_URL = 'http://localhost:3001/api';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private httpClient: HttpClient) { }

  getRecipes({page, perPage}): Observable<RecipePaginationRsp> {
    return this.httpClient.get<RecipePaginationRsp>(`${BASE_URL}/recipes?page=${page}&parPage=${perPage}`);
  }

  createRecipe(body: Recipe): Observable<Recipe> {
    return this.httpClient.post<Recipe>(`${BASE_URL}/recipes`, body);
  }
  deleteRecipe(id: String): Observable<Recipe> {
    return this.httpClient.delete<Recipe>(`${BASE_URL}/recipes/${id}`);
  }

  getRecipeById(id: string): Observable<Recipe> {
    return this.httpClient.get<Recipe>(`${BASE_URL}/recipes/${id}`); 
  }

  updateRecipe(id: string, body: Recipe) {
    return this.httpClient.put<Recipe>(`${BASE_URL}/recipes/${id}`, body); 
  }

}
