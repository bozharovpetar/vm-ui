import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Coffee } from 'src/app/shared/models/coffee.model';
import { CoffeeService } from 'src/app/shared/services/coffee.service';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit {

  // coffeeItems: any[] = [
  //   { "Id": "1", "Title": "ESPRESSO", "Price": 1 },
  //   { "Id": "2", "Title": "MACHIATO", "Price": 1 },
  //   { "Id": "3", "Title": "LATTE", "Price": 1 },
  //   { "Id": "4", "Title": "AMERICANO", "Price": 1 }
  // ];

  coffeeItems: Coffee[] = [];

  selection: any;

  constructor(private coffeeService: CoffeeService) { }

  ngOnInit(): void {
    this.coffeeService.getAllCoffeeTypes().subscribe(result =>{
      this.coffeeItems = result;
    });
  }

  selectItem(item: any) {
    console.log(item);
    this.selection = item;
  }

  orderCoffee() {
    if (this.selection) {
      // call service action to make order
      console.log("ORDERED");
    }
  }

}
