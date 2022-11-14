import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CoffeeLookupDto } from '../models/coffee.models';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  APIUrl = "https://localhost:7276/api/coffee";

  constructor(private http: HttpClient) { }

  getAllCoffeeTypes() : Observable<CoffeeLookupDto[]>{
    return this.http.get<CoffeeLookupDto[]>(this.APIUrl + "/get-all");
  }
}
