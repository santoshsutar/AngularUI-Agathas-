import { Component, OnInit } from '@angular/core';
import { ProductRepositoryService } from '../../Shared/product-repository.service';
import { Router } from '@angular/router';
import { OrderSummaryView } from '../../Models/order-summary-view';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {
  public orders: OrderSummaryView;
  constructor(private repository: ProductRepositoryService, private router: Router) {
    this.repository.OrdersList().subscribe(
      data => {
        this.orders = data;
      }
    );
  }
}
