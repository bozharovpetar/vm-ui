import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coffee } from '../models/coffee.model';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  APIUrl = "https://localhost:7276/api/coffee";

  constructor(private http: HttpClient) { }

  getAllCoffeeTypes() : Observable<Coffee[]>{
    return this.http.get<Coffee[]>(this.APIUrl + "/get-all");
  }
}
