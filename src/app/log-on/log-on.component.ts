import { Component, OnInit } from '@angular/core';
import { InputUser } from 'app/Models/user';
import { NgForm } from '@angular/forms';
import { HomePageViewRepository } from 'app/Shared/home-page-view-repository';
import { Router } from '@angular/router';
import { AuthenticatedUserService } from 'app/Shared/authenticated-user-service.service';

@Component({
  selector: 'app-log-on',
  templateUrl: './log-on.component.html',
  styleUrls: ['./log-on.component.css']
})
export class LogOnComponent implements OnInit {
  public user: InputUser;
  constructor(private homePageViewRepository: HomePageViewRepository,
    private router: Router, private authenticatedUserService: AuthenticatedUserService) {
    this.user = new InputUser();
  }

  ngOnInit() {
  }
  public errorMessage: string;
  public logOn(form: NgForm) {
    this.errorMessage = "";
    if (!form.valid) {
      this.errorMessage = form.errors.string();
      return;
    }
    this.homePageViewRepository.logOn(this.user.Email, this.user.Password)
      .subscribe(data => {
        if (data.IsAuthenticated == true) {
          this.authenticatedUserService.setAuthenticatedUser(data);
          this.router.navigateByUrl('\Home\Index');
          return;
        }
        
        return;
      });
  }

}
