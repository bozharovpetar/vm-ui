import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit {

  coffeeItems: any[] = [
    { "Id": "1", "Title": "ESPRESSO", "Price": 1 },
    { "Id": "2", "Title": "MACHIATO", "Price": 1 },
    { "Id": "3", "Title": "LATTE", "Price": 1 },
    { "Id": "4", "Title": "AMERICANO", "Price": 1 }
  ];

  selection: any;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    // call service action to get coffee types and populate collection {{coffeeItems}}
    // handle on server if coffee is disabled
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
