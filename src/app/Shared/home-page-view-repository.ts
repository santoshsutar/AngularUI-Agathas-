import { Injectable } from '@angular/core';
import { HomePageView } from '../Models/home-page-view';
import { DataSourceService } from './data-source-service';
import { ProductDetailView } from 'app/Models/product-detail-view';
import { ProductSummaryView } from 'app/Models/product-summary-view';
import { Observable } from 'rxjs/Observable';
import { AccountRegister } from 'app/Models/account-register';
import { CustomerView } from "app/Models/customer-view";
import { CustomerDetailView } from 'app/Models/customer-detail-view';
import { User } from 'app/Models/user';
import { DeliveryAddressView } from "app/Models/delivery-address-view";
import { CustomerDeliveryAddressView } from 'app/Models/customer-delivery-address-view';
import { BasketSummaryView } from '../Models/basket-summary-view';

@Injectable()
export class HomePageViewRepository {
    private homePageView: HomePageView = new HomePageView();
    private productDetailView: ProductDetailView = new ProductDetailView();
    constructor(private dataSource: DataSourceService) {
        this.dataSource.GetHomePageView().
            subscribe(data => {
                this.homePageView = data;
            });

    }
    public GetHomePageView():HomePageView {
        return this.homePageView;
    }
    public registerAccount(accountRegister: AccountRegister): Observable<boolean> {

        return this.dataSource.registerAccount(accountRegister);

    }
    public logOn(email: string, password: string): Observable<User> {
        return this.dataSource.LogOn(email, password);
    }
    public getCustomerView(token: string): Observable<CustomerDetailView> {
        return this.dataSource.getCustomerView(token);
    }
    public PostCustomerView(token: CustomerView): Observable<CustomerDetailView> {
        return this.dataSource.PostCustomerView(token);
    }
    public PostAddressView(customerDetailView: CustomerDetailView): Observable<void> {
        return this.dataSource.PostAddressView(customerDetailView);
    }
    public getCustomerDeliveryAddressView(deliveryAddressId: string, customerId: string): Observable<CustomerDeliveryAddressView> {
        return this.dataSource.getCustomerDeliveryAddressView(deliveryAddressId, customerId);
    }
    public PutAddressView(deliveryAddressView: DeliveryAddressView, customerId: string): Observable<void> {
        return this.dataSource.PutAddressView(deliveryAddressView, customerId);
    }
    
}

