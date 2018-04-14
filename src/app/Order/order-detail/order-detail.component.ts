import { Component, OnInit } from '@angular/core';
import { ProductRepositoryService } from '../../Shared/product-repository.service';
import { CustomerOrderView } from '../../Models/customer-order-view';

import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  public customerOrderView:CustomerOrderView;
  constructor(private repository: ProductRepositoryService,
    private activatedRoute: ActivatedRoute,) {
      const orderID = this.activatedRoute.snapshot.params['orderId'];
    this.repository.OrdersDetail(orderID).subscribe(
      data=>{
        
        this.customerOrderView=data;
      }
    );

   }

  ngOnInit() {

  }

}
