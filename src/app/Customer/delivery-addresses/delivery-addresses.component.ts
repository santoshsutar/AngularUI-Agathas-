import { Component, OnInit } from '@angular/core';
import { HomePageViewRepository } from 'app/Shared/home-page-view-repository';
import { AuthenticatedUserService } from 'app/Shared/authenticated-user-service.service';
import { DeliveryAddressView } from 'app/Models/delivery-address-view';
import { CustomerDetailView } from 'app/Models/customer-detail-view';

@Component({
  selector: 'app-delivery-addresses',
  templateUrl: './delivery-addresses.component.html',
  styleUrls: ['./delivery-addresses.component.css']
})
export class DeliveryAddressesComponent implements OnInit {
  public deliveryAddress:DeliveryAddressView[]
  constructor(private homePageViewRepository: HomePageViewRepository,
    private authenticatedUserService: AuthenticatedUserService) {
    this.deliveryAddress = [];
    let token = this.authenticatedUserService.getAuthenticatedUserToken();
    this.homePageViewRepository.getCustomerView(token).subscribe(data => {
      this.deliveryAddress = (data as CustomerDetailView).Customer.DeliveryAddressBook;
    });
  }

  ngOnInit() {
  }

}
