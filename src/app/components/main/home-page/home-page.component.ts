import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  user:[];
  loggedIn: boolean;
  url = '';
  constructor(private dialog: MatDialog, private sharedService: SharedService, private router: Router, private apiService: ApiService) { }

  // Handle login dialog
  handleLogin(){
// let dialogRef = this.dialog.open(LoginDialogComponent, {
//   width: '400px'
// });
// dialogRef.afterClosed().subscribe(user =>{
//  if(user){
//   this.sharedService.LOADING = true;
// let newUser = {
//   email: user.email,
//   firstName: user.firstName,
//   id: user.id,
//   lastName: user.lastName,
//   name: user.name,
//   photoUrl: user.photoUrl,
//   provider: user.provider,
//   password: 'password'
// }
// setTimeout( () =>{
//   this.sharedService.LOADING = false;
// }, 2000);
 
//  }
// });
  }

  getAuthUrl(){
    let url = 'geturl'
    this.apiService.getAuthUrl(url).subscribe(
      res => {
console.log('Oauth', res);
this.url = res.url;
      },
      err => {
console.log('Oauth Err', err);
      }
    )
  }

  ngOnInit() {
    // this.getAuthUrl();
  }

}
