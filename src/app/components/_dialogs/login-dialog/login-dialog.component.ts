import { Component, OnInit, Inject } from '@angular/core';
import { AuthService as SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { SharedService } from 'src/app/services/shared.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { AuthenticationService  } from 'src/app/services/authentication.service';
 
@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {
   user: SocialUser;
   loggedIn: boolean;
   createAccount = false;
   userForm;
   userLoginForm;
   constructor(
     private socialAuthService:  SocialAuthService, 
     private sharedService: SharedService,
     private authService: AuthenticationService,
     public dialogRef: MatDialogRef<LoginDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data, private router: Router, private formBuilder: FormBuilder, private apiService: ApiService) { 

      // Register form
      this.userForm = this.formBuilder.group({
        email: ['', [Validators.required]],
        username: ['', [Validators.required]],
        password: ['', [Validators.required]]
      })

      //Login form
      this.userLoginForm = this.formBuilder.group({
        username: ['', [Validators.required]],
        password: ['', [Validators.required]]
      })
    }
 
  signInWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
       this.sharedService.USER = user;
       this.sharedService.LoggedIn =  (user != null);
       console.log('Oauth user', this.user, 'Logged in', this.loggedIn);
      if(this.loggedIn){
        this.router.navigate(['/setup']);
        this.dialogRef.close(user);
      }
     
    });
  }
 
  signInWithFB(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      if(this.loggedIn){
        // this.dialogRef.close(user);
      }
      console.log('User', user);
    });
  } 

  
 
  signOut(): void {
  this.sharedService.openSnackBar('Login you out...', '', 3000, 'bg-danger');
  setTimeout(() => {
    this.sharedService.openSnackBar('Bye Bye!!', '', 2000, 'bg-success');
    this.socialAuthService.signOut();
    this.dialogRef.close();
    // this.router.navigate(['setup', {authData: {photo: 'photo_url', email: 'email@gmail.com', name: 'Saint Zion'}}]);
  }, 3200);
  }


  // User form submit
  onUserFormSubmit(){
    let user = {
      username: this.userForm.value.username,
      email:this.userForm.value.email,
      password: this.userForm.value.password
    }
    if(this.userForm.invalid){
      this.sharedService.openSnackBar('Oopps..!! Please fill in the form.', '', 4000, 'bg-danger');
    }else{
      // console.log(user, this.userForm.value);
      this.passportJwtRegister(user);
    }
  }

  //Passport Jwt Register
  passportJwtRegister(user){
    this.sharedService.LOADING = true;
    this.apiService.passportJwtRegister(user).subscribe(
      res =>{
        setTimeout( ()=>{
        this.sharedService.LOADING = false;
        console.log(res);
        this.sharedService.openSnackBar('Account Created, You may login now.', 'Ok', 9000, 'bg-success');
      }, 3000);
    }, 
    err =>{
      setTimeout( ()=>{
      this.sharedService.LOADING = false;
      console.log(err);
      this.sharedService.openSnackBar(err.error.msg, 'Ok', 6000, 'bg-danger');
    }, 3000);
    });

  }

 // User login form submit
  onUserLoginFormSubmit(){
    let user = {
      username: this.userLoginForm.value.username,
      password: this.userLoginForm.value.password
    }
    if(this.userLoginForm.invalid){
      this.sharedService.openSnackBar('Oopps..!! Please fill in the form.', '', 4000, 'bg-danger');
    }else{
      // console.log(user, this.userForm.value);
      this.passportJwtLogin(user);
    }

  }

  //Passport Jwt Login
  passportJwtLogin(user){
    this.sharedService.LOADING = true;
    this.apiService.passportJwtLogin(user).subscribe(
      res =>{
         this.dialogRef.close();
        setTimeout( ()=>{
        this.sharedService.LOADING = false;
        console.log(res);
        this.sharedService.openSnackBar(res.msg, 'Ok', 9000, 'bg-success');
        this.authService.setLocalStorage(res);
        // localStorage.setItem('id_token', res.token);
        this.router.navigate(['/app']);

      }, 3000);
    }, 
    err =>{
      setTimeout( ()=>{
      this.sharedService.LOADING = false;
      console.log(err);
      this.sharedService.openSnackBar(err.error.msg, 'Ok', 6000, 'bg-danger');
    }, 3000);
    });

  }

  

  ngOnInit() {
  
    // if(this.loggedIn){
    //   this.signOut();
    // }
    this.socialAuthService.authState.subscribe((user) => {
      this.loggedIn = (user != null);
      if(this.loggedIn){
        // this.dialogRef.close(user);
        this.sharedService.openSnackBar('You are logged in...', '', 3000, 'bg-success')
      }
      console.log('User', user);
    });

  }

}
