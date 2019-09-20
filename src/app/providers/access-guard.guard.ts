import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router';
import{AuthService} from '../providers/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AccessGuardGuard implements CanActivate{

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
    console.log("OnlyLoggedInUsers");
    if (this.authService.isLoggedIn()) { 
      this.router.navigate(['/member'])
      return true
    
    } else {
      window.alert("You don't have permission to view this page"); 
      this.router.navigate(['/login'], {
        queryParams: {
          return: state.url
        }
        });
    
    }
    }
  }


