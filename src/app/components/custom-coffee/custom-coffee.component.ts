import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-coffee',
  templateUrl: './custom-coffee.component.html',
  styleUrls: ['./custom-coffee.component.css']
})
export class CustomCoffeeComponent implements OnInit {

  ingredients: any[] = [
    { "Id": "1", "Title": "MILK", "Price": 1, "LeftInStock": 4 },
    { "Id": "2", "Title": "SUGAR", "Price": 1, "LeftInStock": 5 },
    { "Id": "3", "Title": "ESPRESSO SHOT", "Price": 1, "LeftInStock": 6 },
    { "Id": "4", "Title": "WATER", "Price": 1, "LeftInStock": 7 }
  ];

  selection: any[] = [];
  totalPrice: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  selectItem(item: any) {
    console.log(item);
    var ingredient = this.ingredients.find(x => x.Id == item.Id);

    if (!this.selection.some(x => x.Id == item.Id)) {
      if (ingredient && ingredient.LeftInStock > 0) {
        this.selection.push({
          "Id": item.Id,
          "Title": item.Title,
          "Price": item.Price,
          "Quantity": 1
        });
        ingredient.LeftInStock--;
      }
    } else {
      var entry = this.selection.find(x => x.Id == item.Id);

      if (ingredient && ingredient.LeftInStock > 0) {
        entry.Quantity++;
        ingredient.LeftInStock--;
      }
    }

    this.totalPrice = 0;

    this.selection.forEach(element => {
      this.totalPrice += element.Price * element.Quantity;
    });
  }

  resetSelection() {
    this.selection.forEach(item => {
      var ingredient = this.ingredients.find(x => x.Id == item.Id);
      if(ingredient){
        ingredient.LeftInStock += item.Quantity;
      }
    });
    this.selection = [];
  }

  removeItem(item: any) {
    if (this.selection.some(x => x.Id == item.Id)) {
      var entry = this.selection.find(x => x.Id == item.Id);
      var ingredient = this.ingredients.find(x => x.Id == item.Id);

      if (ingredient && entry.Quantity > 0) {
        entry.Quantity--;
        ingredient.LeftInStock++;
      }
    }
  }

  orderCustomCoffee() {
    console.log(this.selection);
  }

  printSelection() {
    var result = "";
    this.selection.forEach(item => {
      result += item.Title + ' x' + item.Quantity + " ";
    });
    return result;
  }

}
