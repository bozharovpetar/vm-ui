import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IngredientDto } from '../models/ingredient.models';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  APIUrl = "https://localhost:7276/api/ingredient";

  constructor(private http: HttpClient) { }

  getAllIngredients() : Observable<IngredientDto[]>{
    return this.http.get<IngredientDto[]>(this.APIUrl + "/get-all");
  }
}
