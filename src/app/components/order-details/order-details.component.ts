import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { OrderDto } from 'src/app/shared/models/order.models';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  orderId: string | null = "";
  order: OrderDto = new OrderDto();

  constructor(private orderService: OrderService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.orderId = params.get('id');

      if(this.orderId){
        this.orderService.getOrderById(this.orderId!).subscribe(result => {
          if (result) {
            this.order = result;
          }
        });
      }
    })
  }

}
