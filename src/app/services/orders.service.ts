import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
//import { FormControl, FormGroup } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor( private fireStore: AngularFirestore) {}

  createPizzaOrder(data) {
    return new Promise<any>((resolve, reject) => {
        this.fireStore
            .collection("pizzaOrders")
            .add(data)
            .then(res => {
              return res;
            }, err => reject(err));
    });
  }

  getPizzaOrders() {
    return this.fireStore.collection('pizzaOrders').snapshotChanges();
  }
}



