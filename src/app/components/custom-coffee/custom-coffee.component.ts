import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Guid } from 'guid-string';
import { AddIngredientDto, IngredientDto } from 'src/app/shared/models/ingredient.models';
import { IngredientsService } from 'src/app/shared/services/ingredients.service';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'app-custom-coffee',
  templateUrl: './custom-coffee.component.html',
  styleUrls: ['./custom-coffee.component.css']
})
export class CustomCoffeeComponent implements OnInit {

  ingredients: IngredientDto[] = [];

  selection: AddIngredientDto[] = [];
  totalPrice: number = 0;
  errorMessage: string = "";

  constructor(private ingredientService: IngredientsService, private orderService: OrderService, private router: Router) { }

  ngOnInit(): void {
    this.ingredientService.getAllIngredients().subscribe(result => {
      this.ingredients = result;
    });
  }

  selectItem(item: IngredientDto) {
    var ingredient = this.ingredients.find(x => x.id == item.id);

    if (ingredient) {
      this.errorMessage = "";
      if (!this.selection.some(x => x.id == item.id)) {
        if (ingredient && ingredient.leftInStock > 0) {
          this.selection.push(new AddIngredientDto(ingredient.id, 1));
          ingredient.leftInStock--;
        }
      } else {
        var entry = this.selection.find(x => x.id == item.id);

        if (entry) {
          if (ingredient && ingredient.leftInStock > 0) {
            entry.quantity++;
            ingredient.leftInStock--;
          }
        }
      }

      this.totalPrice = 0;

      this.selection.forEach(element => {
        this.totalPrice += ingredient!.price * element.quantity;
      });
    }
  }

  resetSelection() {
    this.selection.forEach(item => {
      var ingredient = this.ingredients.find(x => x.id == item.id);
      if (ingredient) {
        ingredient.leftInStock += item.quantity;
      }
    });
    this.selection = [];
    this.errorMessage = "";
  }

  orderCustomCoffee() {
    this.orderService.orderCustomCoffee(this.selection).subscribe(result => {
      if (result && !Guid.isEmpty(result)) {
        this.router.navigate(['order', result])
      } else {
        this.errorMessage = "We are sorry, we can not make the coffee you requested because one or more ingredients from it is out of stock.";
      }
    });
  }

  printSelection() {
    var result = "";
    this.selection.forEach(item => {
      result += this.ingredients.find(x => x.id == item.id)?.title + ' x' + item.quantity + " ";
    });
    return result;
  }

}
