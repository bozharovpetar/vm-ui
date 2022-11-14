import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CoffeeLookupDto } from 'src/app/shared/models/coffee.models';
import { CoffeeService } from 'src/app/shared/services/coffee.service';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit {

  coffeeItems: CoffeeLookupDto[] = [];

  selection: CoffeeLookupDto | undefined;

  constructor(private coffeeService: CoffeeService, private orderService: OrderService) { }

  ngOnInit(): void {
    this.coffeeService.getAllCoffeeTypes().subscribe(result =>{
      this.coffeeItems = result;
    });
  }

  selectItem(item: CoffeeLookupDto) {
    console.log(item);
    this.selection = item;
  }

  orderCoffee() {
    if (this.selection) {
      this.orderService.orderPredefinedCoffee(this.selection.id).subscribe(result =>{
        if(result){
          console.log("COFFEE ORDERED");
        }
      });
    }
  }

}
