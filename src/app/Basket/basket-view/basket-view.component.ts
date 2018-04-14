import { Component, OnInit } from '@angular/core';
import { ProductRepositoryService } from '../../Shared/product-repository.service';
import { BasketDetailView } from '../../Models/basket-detail-view';
import { BasketView } from '../../Models/basket-view';
import { JsonBasketQtyUpdateRequest } from '../../Models/json-basket-qty-update-request';
import { JsonBasketItemUpdateRequest } from '../../Models/json-basket-item-update-request';
import { CurrentBasketService } from '../../Shared/current-basket.service';

@Component({
  selector: 'app-basket-view',
  templateUrl: './basket-view.component.html',
  styleUrls: ['./basket-view.component.css']
})
export class BasketViewComponent implements OnInit {
  public basketDetailView: BasketDetailView;
  constructor(private repository: ProductRepositoryService,
      private currentBasketService: CurrentBasketService) {
    this.basketDetailView = new BasketDetailView();
    this.basketDetailView.Basket = new BasketView();
    this.repository.getBasketDetailView().subscribe(
      data => {
       this.currentBasketService.basketSummaryView=data.BasketSummary;
        this.basketDetailView = data;
      }
    );
  }
  public removeItem(productId) {
    this.repository.RemoveItemFromBasket(productId).subscribe(
      data => {
        this.currentBasketService.basketSummaryView=data.BasketSummary;        
        this.basketDetailView = data;
      }
    );
  }
  public updateItemQtys() {
    let JsonBasketItemUpdateRequestArray: JsonBasketItemUpdateRequest[]
      = new Array<JsonBasketItemUpdateRequest>(this.basketDetailView.Basket.Items.length);
    for (let index = 0; index < this.basketDetailView.Basket.Items.length; index++) {
      const element = this.basketDetailView.Basket.Items[index];
      JsonBasketItemUpdateRequestArray[index] = new JsonBasketItemUpdateRequest();
      JsonBasketItemUpdateRequestArray[index].ProductId = element.ProductId;
      JsonBasketItemUpdateRequestArray[index].Qty = element.Qty;

    }
    let jsonBasketQtyUpdateRequest: JsonBasketQtyUpdateRequest;
    jsonBasketQtyUpdateRequest = new JsonBasketQtyUpdateRequest();
    jsonBasketQtyUpdateRequest.Items = JsonBasketItemUpdateRequestArray;
    this.repository.UpdateBasketItems(jsonBasketQtyUpdateRequest).subscribe(
      data => {
        this.currentBasketService.basketSummaryView=data.BasketSummary;        
        this.basketDetailView = data;
      }
    );
  }
  onChange(selectedDeliveryOptionId: string) {
    this.repository.UpdateShipping(selectedDeliveryOptionId).subscribe(
      data => {
        this.currentBasketService.basketSummaryView=data.BasketSummary;        
        this.basketDetailView = data;
      }
    );
  }
  ngOnInit() {
  }

}
