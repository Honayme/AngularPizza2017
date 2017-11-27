import {Component, OnInit} from '@angular/core';
import {PizzaCloud9Service} from '../pizza-cloud9.service';
import {Pizza} from './pizza';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

  listPizza: any;

  constructor(private servicePizza: PizzaCloud9Service) {
  }

  // When pizza arrive on our data stream
  // set it equal to our local listPizza array.
  ngOnInit() {
    this.servicePizza.get()
      .subscribe(res => {
        this.listPizza = res;
        console.log((this.listPizza));
      })
  }

}
