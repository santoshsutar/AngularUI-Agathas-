import { Component, OnInit } from '@angular/core';
import { ProductRepositoryService } from '../../Shared/product-repository.service';
import { OrderConfirmationView } from '../../Models/order-confirmation-view';
import { Router } from '@angular/router';
import { CurrentBasketService } from '../../Shared/current-basket.service';

@Component({
  selector: 'app-confirmorder',
  templateUrl: './confirmorder.component.html',
  styleUrls: ['./confirmorder.component.css']
})
export class ConfirmorderComponent implements OnInit {

  public orderConfirmationView: OrderConfirmationView;

  constructor(private repository: ProductRepositoryService,
     private router: Router,
    private currentBasketService: CurrentBasketService) {
    this.repository.Checkout().subscribe(
      data => {
        this.orderConfirmationView = data;
        
        if (this.orderConfirmationView.DeliveryAddresses.length == 0) {
          this.router.navigateByUrl('Checkout/AddDeliveryAddress');
        }
      }
    );
  }

  ngOnInit() {
  }
  public PlaceOrder() {

    this.repository.PlaceOrder(this.orderConfirmationView.Basket.DeliveryOptionId)
      .subscribe(data => {
        this.currentBasketService.basketSummaryView=null;
        this.router.navigateByUrl('Payment/CreatePaymentFor');
      });
  }

}
