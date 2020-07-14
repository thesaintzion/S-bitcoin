import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private sharedService: SharedService, private router: Router) { }
canActivate(): boolean{
  if(this.sharedService.LoggedIn){
return true
  }else{
    this.router.navigate(['/']);
    this.sharedService.openSnackBar('Please Login', 'Ok', 4000, '');
    return false;
  }
}
}
