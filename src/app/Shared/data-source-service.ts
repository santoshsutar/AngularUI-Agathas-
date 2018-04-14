import { Injectable } from '@angular/core';
import { Http, Request, RequestMethod, Headers, Response, Jsonp, RequestOptions, RequestOptionsArgs } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import { HomePageView } from 'app/Models/home-page-view';
import { ProductSummaryView } from 'app/Models/product-summary-view';
import { ProductDetailView } from 'app/Models/product-detail-view';
import { ProductSearchResultView } from 'app/Models/product-search-result-view';
import { AccountRegister } from 'app/Models/account-register';
import { CustomerView } from "app/Models/customer-view";
import { CustomerDetailView } from 'app/Models/customer-detail-view';
import { User } from 'app/Models/user';
import { DeliveryAddressView } from "app/Models/delivery-address-view";
import { CustomerDeliveryAddressView } from 'app/Models/customer-delivery-address-view';
import { BasketSummaryView } from 'app/Models/basket-summary-view';
import { BasketDetailView } from '../Models/basket-detail-view';
import { JsonBasketQtyUpdateRequest } from '../Models/json-basket-qty-update-request';
import { OrderConfirmationView } from '../Models/order-confirmation-view';
import { OrderSummaryView } from '../Models/order-summary-view';
import { CustomerOrderView } from '../Models/customer-order-view';


const PROTOCOL = "http";
const PORT = 38731;
@Injectable()
export class DataSourceService {

  baseUrl: string;
  constructor(private http: Http, private jsonp: Jsonp) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }
  public GetHomePageView(): Observable<HomePageView> {
    return this.sendRequest(RequestMethod.Get, "api/home/index") as Observable<HomePageView>;

  }
  public getProductDetailView(productId: number): Observable<ProductDetailView> {
    return this.sendRequest(RequestMethod.Get, "api/product/detail?id=" + productId) as Observable<ProductDetailView>;

  }
  public addProductToBasket(productId: number): Observable<BasketSummaryView> {

    return this.sendRequest(RequestMethod.Get, "api/Basket/AddToBasket?productId=" + productId) as Observable<BasketSummaryView>;

  }
  public getProductSearchResultView(categoryId: string): Observable<ProductSearchResultView> {
    return this.sendRequest(RequestMethod.Get, "api/product/GetProductsByCategory?categoryId=" + categoryId) as Observable<ProductSearchResultView>;

  }
  public registerAccount(accountRegister: AccountRegister): Observable<boolean> {
    return this.sendRequest(RequestMethod.Post, "api/Account/Register", accountRegister) as Observable<boolean>;
  }
  public LogOn(email: string, password: string): Observable<User> {
    let data = { "email": email, "password": password };
    return this.sendRequest(RequestMethod.Post, "api/AccountLogOn/LogOn", data) as Observable<User>;
  }
  public getCustomerView(token: string): Observable<CustomerDetailView> {
    return this.sendRequest(RequestMethod.Get, "api/Customer/Detail?token=" + token) as Observable<CustomerDetailView>;
  }
  public getCustomerDeliveryAddressView(deliveryAddressId: string, customerId: string): Observable<CustomerDeliveryAddressView> {
    return this.sendRequest(RequestMethod.Get, "api/Customer/EditDeliveryAddress?deliveryAddressId=" + deliveryAddressId + "&customerId=" + customerId) as Observable<CustomerDeliveryAddressView>;
  }

  public PostCustomerView(customerView: CustomerView): Observable<CustomerDetailView> {
    return this.sendRequest(RequestMethod.Post, "api/Customer/Detail", customerView) as Observable<CustomerDetailView>;
  }
  public PostAddressView(customerDetailView: CustomerDetailView): Observable<void> {

    return this.sendRequest(RequestMethod.Post, "api/Customer/AddDeliveryAddress", customerDetailView) as Observable<void>;
  }
  public PutAddressView(deliveryAddressView: DeliveryAddressView, customerId: string): Observable<void> {

    return this.sendRequest(RequestMethod.Post, "api/Customer/EditDeliveryAddress?customerId=" + customerId, deliveryAddressView) as Observable<void>;
  }
  public getBasketDetailView(): Observable<BasketDetailView> {
    return this.sendRequest(RequestMethod.Get, "api/Basket/Detail") as Observable<BasketDetailView>;

  }
  public RemoveItemFromBasket(productId: number): Observable<BasketDetailView> {
    return this.sendRequest(RequestMethod.Post, "api/Basket/RemoveItem", productId) as Observable<BasketDetailView>;
  }
  public UpdateBasketItems(jsonBasketQtyUpdateRequest: JsonBasketQtyUpdateRequest): Observable<BasketDetailView> {
    return this.sendRequest(RequestMethod.Post, "api/Basket/UpdateItems", jsonBasketQtyUpdateRequest) as Observable<BasketDetailView>;
  }
  public UpdateShipping(selectedDeliveryOptionId: string): Observable<BasketDetailView> {
    return this.sendRequest(RequestMethod.Post, "api/Basket/UpdateShipping", selectedDeliveryOptionId) as Observable<BasketDetailView>;
  }
  public Checkout(): Observable<OrderConfirmationView> {
    return this.sendRequest(RequestMethod.Get, "api/Checkout/Checkout") as Observable<OrderConfirmationView>;
  }

  public PlaceOrder(DeliveryId: number): Observable<number> {
    return this.sendRequest(RequestMethod.Post, "api/Checkout/PlaceOrder", DeliveryId) as Observable<number>;
  }
  public OrdersList(): Observable<OrderSummaryView> {
    return this.sendRequest(RequestMethod.Get, "api/Order/List") as Observable<OrderSummaryView>;
  }
  public OrdersDetail(orderId: number): Observable<CustomerOrderView> {
    return this.sendRequest(RequestMethod.Get, "api/Order/Detail?orderId=" + orderId) as Observable<CustomerOrderView>;
  }

  private sendRequest(verb: RequestMethod,
    url: string, body?: DeliveryAddressView | CustomerView | HomePageView
      | AccountRegister | null | any, header?: BasketSummaryView): Observable<HomePageView> | Observable<User> | Observable<CustomerDeliveryAddressView>
    | Observable<boolean> | Observable<ProductDetailView> |
    Observable<CustomerDetailView> | Observable<BasketDetailView> | Observable<OrderConfirmationView>
    | Observable<BasketSummaryView> | Observable<OrderSummaryView> | Observable<number>
    | Observable<CustomerOrderView> | Observable<void> {
    let headers = new Headers();
    headers.set("Content-Type", "application/x-www-form-urlencoded");
    //headers.set("Accept", "application/xml,application/xhtml+xml,text/html;q=0.9, text/plain;q=0.8,image/png,*/*;q=0.5");
    //headers.append('Access-Control-Allow-Origin' , '*');
    //headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    //headers.append('Accept','application/json');
    //headers.append('Connection','keep-alive');

    //headers.set("withCredentials", "true");

    return this.http.request(new Request({
      method: verb,
      url: this.baseUrl + url,
      body: body,
      headers: headers,
      withCredentials: true
    })).map(response => {
      //response.status);
      return response.json();
    }).catch((error: Response) => Observable.throw(
      `Network Error: ${error.statusText} (${error.status})`));;
  }

}

