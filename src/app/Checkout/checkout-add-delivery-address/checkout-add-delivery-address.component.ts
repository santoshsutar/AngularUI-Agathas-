import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomePageViewRepository } from '../../Shared/home-page-view-repository';
import { AuthenticatedUserService } from '../../Shared/authenticated-user-service.service';
import { DeliveryAddressView } from '../../Models/delivery-address-view';
import { NgForm } from '@angular/forms';
import { CustomerDetailView } from '../../Models/customer-detail-view';
import { CustomerView } from '../../Models/customer-view';

@Component({
  selector: 'app-checkout-add-delivery-address',
  templateUrl: './checkout-add-delivery-address.component.html',
  styleUrls: ['./checkout-add-delivery-address.component.css']
})
export class CheckoutAddDeliveryAddressComponent implements OnInit {
  public address: DeliveryAddressView;
  
  constructor(private router: Router, private homePageViewRepository: HomePageViewRepository,
    private authenticatedUserService: AuthenticatedUserService) {

    this.address = new DeliveryAddressView();
  }

  ngOnInit() {
  }
  public Save(form: NgForm) {
    if (!form.valid) {
      //this.errorMessage = form.errors.string();
      return;
    }
    let customerDetailView: CustomerDetailView = new CustomerDetailView();
    customerDetailView.Customer = new CustomerView();
    let token = this.authenticatedUserService.getAuthenticatedUserToken();
    customerDetailView.Customer.IdentityToken = token;
    let deliveryAddressView = new DeliveryAddressView();
    deliveryAddressView = this.address;
    customerDetailView.Customer.DeliveryAddressBook = [deliveryAddressView];
    this.homePageViewRepository.PostAddressView(customerDetailView)
      .subscribe(data => {
        this.router.navigateByUrl('/Checkout/Checkout');
        return;
      });
  }
}
