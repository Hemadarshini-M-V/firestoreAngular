import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor( private ordersService: OrdersService ) {}

  orderForm: FormGroup;
  pizzas = [ 'Simple Veg', 'Veg Corn', 'Veg Cheese', 'Veg Jalapeno', 
              'Veg Paneer'];
  pizzaOrder: any = [];

  ngOnInit(): void {
    this.orderForm = new FormGroup({        
      customerName: new FormControl(''),
      orderNumber: new FormControl(''),
      pizzaOrder: new FormControl(''), 
      completed: new FormControl(false)
    });
  }

  addPizza = pizza => this.pizzaOrder.push(pizza);

  removePizza = pizza => {
      let index = this.pizzaOrder.indexOf(pizza);
      if (index > -1) this.pizzaOrder.splice(index, 1);
  };

  onSubmit() {
    this.orderForm.value.pizzaOrder = this.pizzaOrder;
    let data = this.orderForm.value;
      
    this.ordersService.createPizzaOrder(data)
      .then(res => {
        console.log(res);
      });
  }






}
