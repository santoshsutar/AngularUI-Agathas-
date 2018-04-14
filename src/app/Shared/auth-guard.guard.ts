import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticatedUserService } from './authenticated-user-service.service';

@Injectable()
export class AuthGuardGuard implements CanActivate {

  constructor(private authenticatedUserService: AuthenticatedUserService,
    private router: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let isUserAuthenticatedUser: boolean = this.authenticatedUserService.isUserAuthenticatedUser();
    if (isUserAuthenticatedUser) {
      return true;
    }
    this.router.navigateByUrl('AccountLogOn/LogOn');
    return false;
  }
}
