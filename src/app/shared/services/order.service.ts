import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddIngredientDto } from '../models/ingredient.models';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  APIUrl = "https://localhost:7276/api/order";

  constructor(private http: HttpClient) { }

  orderPredefinedCoffee(id: string) : Observable<boolean>{
    return this.http.post<boolean>(this.APIUrl + "/order-coffee?id=" + id, null);
  }

  orderCustomCoffee(ingredients: AddIngredientDto[]) : Observable<boolean>{
    return this.http.post<boolean>(this.APIUrl + "/order-custom-coffee", ingredients);
  }
}
