import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DataSourceService } from './Shared/data-source-service';
import { HomePageViewRepository } from './Shared/home-page-view-repository';
import { RouterModule, Routes } from "@angular/router";
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductSearchResultsComponent } from './product/product-search-results/product-search-results.component';
import { ProductCatalogMasterComponent } from './SharedViews/product-catalog-master/product-catalog-master.component';
import { CategoryViewComponent } from './SharedViews/category-view/category-view.component';
import { SiteComponent } from './sharedviews/site/site.component';
import { SiteFooterComponent } from './sharedviews/site-footer/site-footer.component';
import { ProductRepositoryService } from 'app/Shared/product-repository.service';
import { BasketSummaryViewComponent } from './sharedviews/basket-summary-view/basket-summary-view.component';
import { AccountRegisterComponent } from './account-register/account-register.component';
import { CustomerDetailComponent } from './Customer/customer-detail/customer-detail.component';
import { CustomerAccountMasterComponent } from './sharedviews/customer-account-master/customer-account-master.component';
import { CustomerMenuComponent } from './sharedviews/customer-menu/customer-menu.component';
import { DeliveryAddressesComponent } from './Customer/delivery-addresses/delivery-addresses.component';
import { AddDeliveryAddressComponent } from './Customer/add-delivery-address/add-delivery-address.component';
import { EditDeliveryAddressComponent } from './Customer/edit-delivery-address/edit-delivery-address.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { OrderDetailComponent } from './order/order-detail/order-detail.component';
import { LogOnComponent } from './log-on/log-on.component';
import { AuthenticatedUserService } from 'app/Shared/authenticated-user-service.service';
import { CustomerView } from "app/Models/customer-view";
import { CurrentBasketService } from './Shared/current-basket.service';
import { BasketViewComponent } from './basket/basket-view/basket-view.component';
import { ConfirmorderComponent } from './checkout/confirmorder/confirmorder.component';
import { CheckoutAddDeliveryAddressComponent } from './checkout/checkout-add-delivery-address/checkout-add-delivery-address.component';
import { PaymentPostComponent } from './payment/payment-post/payment-post.component';
import { AuthGuardGuard } from './Shared/auth-guard.guard';
const routes: Routes = [
  { path: 'Product/GetProductsByCategory/:categoryId', component: ProductSearchResultsComponent },
  { path: 'AccountRegister/Register', component: AccountRegisterComponent },
  { path: 'ProductDetail/:Id', component: ProductCatalogMasterComponent },
  { path: 'Customer/Detail', canActivate: [AuthGuardGuard], component: CustomerAccountMasterComponent },
  { path: 'Order/Detail/:orderId', canActivate: [AuthGuardGuard], component: CustomerAccountMasterComponent },
  { path: 'Customer/AddDeliveryAddress', canActivate: [AuthGuardGuard], component: CustomerAccountMasterComponent },
  { path: 'Customer/DeliveryAddresses', canActivate: [AuthGuardGuard], component: CustomerAccountMasterComponent },
  { path: 'Customer/EditDeliveryAddress/:Id', canActivate: [AuthGuardGuard], component: CustomerAccountMasterComponent },
  { path: 'Order/List', canActivate: [AuthGuardGuard], component: CustomerAccountMasterComponent },
  { path: 'Basket/Detail', component: ProductCatalogMasterComponent },
  { path: 'AccountLogOn/LogOn', component: LogOnComponent },
  { path: 'Checkout/Checkout', canActivate: [AuthGuardGuard], component: ConfirmorderComponent },
  { path: 'Checkout/AddDeliveryAddress', canActivate: [AuthGuardGuard], component: CheckoutAddDeliveryAddressComponent },
  { path: 'Payment/CreatePaymentFor', canActivate: [AuthGuardGuard], component: PaymentPostComponent },
  { path: '**', component: ProductCatalogMasterComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductDetailComponent,
    ProductSearchResultsComponent,
    ProductCatalogMasterComponent,
    CategoryViewComponent,
    SiteComponent,
    SiteFooterComponent,
    BasketSummaryViewComponent,
    AccountRegisterComponent,
    CustomerDetailComponent,
    CustomerAccountMasterComponent,
    CustomerMenuComponent,
    DeliveryAddressesComponent,
    AddDeliveryAddressComponent,
    EditDeliveryAddressComponent,
    OrderListComponent,
    OrderDetailComponent,
    LogOnComponent,
    BasketViewComponent,
    ConfirmorderComponent,
    CheckoutAddDeliveryAddressComponent,
    PaymentPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataSourceService, HomePageViewRepository, ProductRepositoryService,
    AuthenticatedUserService, CurrentBasketService, AuthGuardGuard],
  bootstrap: [SiteComponent]
})
export class AppModule { }
