import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { HomePageViewRepository } from 'app/Shared/home-page-view-repository';
import { AccountRegister } from 'app/Models/account-register';
import { Router } from '@angular/router';


@Component({
  selector: 'app-account-register',
  templateUrl: './account-register.component.html',
  styleUrls: ['./account-register.component.css']
})
export class AccountRegisterComponent implements OnInit {

  public accountRegister: AccountRegister;
  constructor(private homePageViewRepository: HomePageViewRepository,
    private router: Router
  ) {
    this.accountRegister = new AccountRegister();
  }

  ngOnInit() {
  }
  public registerAccount(form: NgForm) {
    if (!form.valid) {
      return;
    }
    this.homePageViewRepository.registerAccount(this.accountRegister)
      .subscribe(data => {
        if (data) {          
          this.router.navigateByUrl('Customer/Detail');
          return;
        }    
        return;
      });
  }
}
