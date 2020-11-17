import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  constructor( private ordersService: OrdersService) {}

  pizzaOrders: any;

  ngOnInit(): void {
    this.getAllPizzaOrders(); 
  }

  getAllPizzaOrders() {
    this.ordersService.getPizzaOrders().subscribe( res => {
      this.pizzaOrders = res;
      console.log(this.pizzaOrders);
    })
  }

}
