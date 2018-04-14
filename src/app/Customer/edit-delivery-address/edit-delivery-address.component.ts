import { Component, OnInit } from '@angular/core';
import { DeliveryAddressView } from 'app/Models/delivery-address-view';
import { Router, ActivatedRoute } from '@angular/router';
import { HomePageViewRepository } from 'app/Shared/home-page-view-repository';
import { AuthenticatedUserService } from 'app/Shared/authenticated-user-service.service';
import { CustomerDeliveryAddressView } from 'app/Models/customer-delivery-address-view';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-delivery-address',
  templateUrl: './edit-delivery-address.component.html',
  styleUrls: ['./edit-delivery-address.component.css']
})
export class EditDeliveryAddressComponent implements OnInit {

  public address: DeliveryAddressView;
  constructor(private router: Router, private homePageViewRepository: HomePageViewRepository,
    private authenticatedUserService: AuthenticatedUserService, private activatedRoute: ActivatedRoute) {
      const deliveryId = this.activatedRoute.snapshot.params['Id'];
    this.address = new DeliveryAddressView();
    let token = this.authenticatedUserService.getAuthenticatedUserToken();
    this.homePageViewRepository.getCustomerDeliveryAddressView(deliveryId,token).subscribe(data => {
      this.address = (data as CustomerDeliveryAddressView).Address;
    });
  }

  ngOnInit() {
  }
  public Save(form: NgForm) {
    if (!form.valid) {
      //this.errorMessage = form.errors.string();
      return;
    } 
    let token = this.authenticatedUserService.getAuthenticatedUserToken();
    
    this.homePageViewRepository.PutAddressView(this.address,token)
      .subscribe(data => {
        this.router.navigateByUrl('/Customer/DeliveryAddresses');
        return;
      });
  }
}
