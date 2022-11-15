import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddIngredientDto } from '../models/ingredient.models';
import { OrderDto } from '../models/order.models';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  APIUrl = "https://localhost:7276/api/order";

  constructor(private http: HttpClient) { }

  getOrderById(id: string) : Observable<OrderDto>{
    return this.http.get<OrderDto>(this.APIUrl + "/get?id=" + id);
  }

  orderPredefinedCoffee(id: string) : Observable<string>{
    return this.http.post<string>(this.APIUrl + "/order-coffee?id=" + id, null);
  }

  orderCustomCoffee(ingredients: AddIngredientDto[]) : Observable<string>{
    return this.http.post<string>(this.APIUrl + "/order-custom-coffee", ingredients);
  }
}
