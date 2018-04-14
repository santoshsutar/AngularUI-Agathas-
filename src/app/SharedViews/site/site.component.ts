import { Component, OnInit } from '@angular/core';
import { AuthenticatedUserService } from 'app/Shared/authenticated-user-service.service';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {

constructor(private authenticatedUserService: AuthenticatedUserService) 
 {
  } 
ngOnInit() {  
}
public isUserAuthenticated():Boolean
{
  
   return  this.authenticatedUserService.isUserAuthenticatedUser(); 
}

}