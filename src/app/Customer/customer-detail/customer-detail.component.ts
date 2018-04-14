import { Component, OnInit } from '@angular/core';
import { HomePageViewRepository } from 'app/Shared/home-page-view-repository';
import { CustomerView } from 'app/Models/customer-view';
import { NgForm } from '@angular/forms';
import { AuthenticatedUserService } from 'app/Shared/authenticated-user-service.service';
import { CustomerDetailView } from 'app/Models/customer-detail-view';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  public customerView: CustomerView;
  constructor(private homePageViewRepository: HomePageViewRepository,
    private authenticatedUserService: AuthenticatedUserService) {
    this.customerView = new CustomerView();
    let token = this.authenticatedUserService.getAuthenticatedUserToken();
    this.homePageViewRepository.getCustomerView(token).subscribe(data => {
      this.customerView = (data as CustomerDetailView).Customer;
    });
  }

  ngOnInit() {

  }
  public PostCustomerView(form: NgForm) {
    if (!form.valid) {
      return;
    }
    this.homePageViewRepository.PostCustomerView(this.customerView)
      .subscribe(data => {
        if (data) {         
           
          return;
        }    
        return;
      });
  }
}
