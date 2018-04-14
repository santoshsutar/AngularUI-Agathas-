import { Injectable } from '@angular/core';
import { DataSourceService } from 'app/Shared/data-source-service';
import { ProductSearchResultView } from 'app/Models/product-search-result-view';
import { Observable } from 'rxjs/Observable';
import { ProductDetailView } from 'app/Models/product-detail-view';
import { BasketSummaryView } from 'app/Models/basket-summary-view';
import { BasketDetailView } from '../Models/basket-detail-view';
import { JsonBasketQtyUpdateRequest } from '../Models/json-basket-qty-update-request';
import { OrderConfirmationView } from '../Models/order-confirmation-view';
import { OrderSummaryView } from '../Models/order-summary-view';
import { CustomerOrderView } from '../Models/customer-order-view';

@Injectable()
export class ProductRepositoryService {
  private productSearchResultView: ProductSearchResultView;
  constructor(private dataSource: DataSourceService) {

  }

  public getProductSearchResultView(catgeoryId: string): Observable<ProductSearchResultView> {
    return this.dataSource.getProductSearchResultView(catgeoryId);
  }
  public getProductDetailView(id: number): Observable<ProductDetailView> {
    return this.dataSource.getProductDetailView(id);
  }
  public addProductToBasket(productId: number): Observable<BasketSummaryView> {
    return this.dataSource.addProductToBasket(productId);
  }
  public getBasketDetailView(): Observable<BasketDetailView> {
    return this.dataSource.getBasketDetailView();
  }
  public RemoveItemFromBasket(productId: number): Observable<BasketDetailView> {
    return this.dataSource.RemoveItemFromBasket(productId);
  }
  public UpdateBasketItems(jsonBasketQtyUpdateRequest: JsonBasketQtyUpdateRequest): Observable<BasketDetailView> {
    return this.dataSource.UpdateBasketItems(jsonBasketQtyUpdateRequest);
  }
  public UpdateShipping(selectedDeliveryOptionId: string): Observable<BasketDetailView> {
    return this.dataSource.UpdateShipping(selectedDeliveryOptionId);
  }
  public Checkout(): Observable<OrderConfirmationView> {
    return this.dataSource.Checkout();
  }
  public PlaceOrder(DeliveryId: number): Observable<number> {
    return this.dataSource.PlaceOrder(DeliveryId);
  }
  public OrdersList(): Observable<OrderSummaryView> {
    return this.dataSource.OrdersList();
  }
  public OrdersDetail(orderId:number): Observable<CustomerOrderView> {
    return this.dataSource.OrdersDetail(orderId);
  }
}
