import { Injectable } from '@angular/core';
import * as moment from "moment";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  setLocalStorage(responseObj) {
    const expires = moment().add(responseObj.expiresIn);
    localStorage.setItem('id_token', responseObj.token);
    localStorage.setItem('expires_at', JSON.stringify(expires.valueOf()));
  }          

  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  }

  isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt)
  }
  
}
