import { Component, OnInit } from '@angular/core';
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

  constructor(private ingredientService: IngredientsService, private orderService: OrderService) { }

  ngOnInit(): void {
    this.ingredientService.getAllIngredients().subscribe(result=>{
      this.ingredients = result;
    });
  }

  selectItem(item: IngredientDto) {
    console.log(item);
    var ingredient = this.ingredients.find(x => x.id == item.id);

    if(ingredient){
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
  }

  removeItem(item: AddIngredientDto) {
    if (this.selection.some(x => x.id == item.id)) {
      var entry = this.selection.find(x => x.id == item.id);
      var ingredient = this.ingredients.find(x => x.id == item.id);

      if (ingredient && entry!.quantity > 0) {
        entry!.quantity--;
        ingredient.leftInStock++;
      }
    }
  }

  orderCustomCoffee() {
    this.orderService.orderCustomCoffee(this.selection).subscribe(result =>{
      if(result){
        console.log("CUSTOM COFFEE ORDERED");
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
