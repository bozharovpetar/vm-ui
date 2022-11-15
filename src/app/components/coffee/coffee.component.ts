import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Guid } from 'guid-string';
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

  errorMessage: string = "";

  constructor(private coffeeService: CoffeeService, private orderService: OrderService, private router: Router) { }

  ngOnInit(): void {
    this.coffeeService.getAllCoffeeTypes().subscribe(result => {
      this.coffeeItems = result;
    });
  }

  selectItem(item: CoffeeLookupDto) {
    this.errorMessage = "";
    this.selection = item;
  }

  orderCoffee() {
    if (this.selection) {
      this.orderService.orderPredefinedCoffee(this.selection.id).subscribe(result => {
        if (result && !Guid.isEmpty(result)) {
          this.router.navigate(['order', result])
        } else {
          this.errorMessage = "We are sorry, we can not make the coffee you requested because one or more ingredients from it is out of stock.";
        }
      });
    }
  }
}
