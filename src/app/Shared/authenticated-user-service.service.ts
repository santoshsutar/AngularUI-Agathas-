import { Injectable } from '@angular/core';
import { User } from 'app/Models/user';

@Injectable()
export class AuthenticatedUserService {

  private authenticatedUser:User;
  constructor() { }

  public setAuthenticatedUser(aUser:User)
  {
    if (this.authenticatedUser ==null) {
      this.authenticatedUser=new User();
      this.authenticatedUser.Email=aUser.Email;
      this.authenticatedUser.AuthenticationToken=aUser.AuthenticationToken;
      this.authenticatedUser.IsAuthenticated=aUser.IsAuthenticated;
      return;
    }
    console.log("User already logged");        
  }
  public getAuthenticatedUserEmail():string
  {
    return this.authenticatedUser.Email;
  }
  public getAuthenticatedUserToken():string
  {
    return this.authenticatedUser.AuthenticationToken;
  }
  public isUserAuthenticatedUser():boolean
  {
    if (this.authenticatedUser==null) {
     return false; 
    }
    return true;
  }
}
