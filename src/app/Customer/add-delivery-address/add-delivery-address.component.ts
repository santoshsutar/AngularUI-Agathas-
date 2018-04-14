import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DeliveryAddressView } from 'app/Models/delivery-address-view';
import { AuthenticatedUserService } from 'app/Shared/authenticated-user-service.service';
import { HomePageViewRepository } from 'app/Shared/home-page-view-repository';
import { CustomerDetailView } from 'app/Models/customer-detail-view';
import { CustomerView } from 'app/Models/customer-view';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-delivery-address',
  templateUrl: './add-delivery-address.component.html',
  styleUrls: ['./add-delivery-address.component.css']
})
export class AddDeliveryAddressComponent implements OnInit {
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
        this.router.navigateByUrl('/Customer/DeliveryAddresses');
        return;
      });
  }
}
