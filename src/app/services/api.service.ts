import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ArticleModel } from '../_ngrx-store/models/aricle.model';
import { messageModel } from '../components/quiz/quiz.component';


@Injectable({
  providedIn: 'root'
})

export class ApiService {

  socket;

  // readonly socketUrl: string = 'http://localhost:3600';
  // readonly socketUrl: string = 'http://localhost:5000';
  readonly socketUrl: string = 'https://speed4nigeria.herokuapp.com';
  // https://speed4nigeria.herokuapp.com/api/online

  readonly userUrl = 'http://localhost:3600/api/chat_app/v1';
  //  readonly  userUrl: string  = 'https://saint-api.herokuapp.com/api/chat_app/v1';


  readonly articles_url = 'http://localhost:3000/articles'

// USER Obj
LOGGED_IN_USER = {
  id: null,
  firstname: null,
  lastname: null,
  email: null,
  user_type_id:  null,
  phone_number:  null,
  gender_id:  null,
  address:  null,
  status: null,
  activated:  null,
  profile_photo_url: 'user-female.svg',
  friends: [],
  friend_requests: [],
  country_id:  null,
  createdAt: null,
  updatedAt:  null,
  }

 

  USER = {
    id: null,
    firstname: null,
    lastname: null,
    username: null,
    email: null,
    phone_number:  null,
    gender_id:  null,
    address:  null,
    status: null,
    activated:  null,
    profile_photo_url: 'user-female.svg',
    friends: [],
    friend_requests: [],
    country_id:  null,
    createdAt: null,
    updatedAt:  null,
    }

constructor(private http: HttpClient, private router: Router) { }

 headers = new HttpHeaders({'Content-type': 'application/json'});

get socketId() {
  return this.socket.id
}

connect() {
  this.socket = io(this.socketUrl);
}

///=== Socket io  ===== ////
 socketListen(event: any){
  return new Observable<any>((subscriber) =>{
    this.socket.on(event, (data) => {
    subscriber.next(data);
  });
  });

}

sockEmit(event: any, data: any){
   this.socket.emit(event, data);
}

///=== Gallery  ===== ////
addImage( formData: any, appName: any, userId: any){
  return this.http.post<any>(`${this.userUrl}/user/uplaod?appName=${appName}&userId=${userId}`, formData);
}

getGallery(userId: any){  
  return this.http.get<any>(this.userUrl + '/user/uplaod/' + userId) 
}


///=== Articles  ===== ////
getArticles(){
return this.http.get<ArticleModel[]>(this.articles_url).pipe(delay(500));
}
addArticle(article: ArticleModel){
  return this.http.post(this.articles_url, article).pipe(delay(500));
}
deleteArticle(id: any){
  return this.http.delete<ArticleModel[]>(`${this.articles_url}/${id}`).pipe(delay(500));
}
editArticle(article: ArticleModel){
  return this.http.patch<ArticleModel[]>(this.articles_url, article).pipe(delay(500));
}



//=== oAuth Facebook login  ===//
addUser(user: any){
  return this.http.post<any>(this.userUrl + '/user', user);
}


getAuthUrl(url: any){
  return this.http.get<any>(this.userUrl + '/user?url=' + url);
}


getUser(){
  return this.http.get<any>('http://localhost:3600/auth/profile');
}

passportJwtRegister(user: any){
  return this.http.post<any>('http://127.0.0.1:3001/register', user, { headers: this.headers });
}

passportJwtLogin(user: any){
  return this.http.post<any>('http://127.0.0.1:3001/login-jwt', user, { headers: this.headers });
}

passportJwtProtectedRoute(){
  return this.http.get<any>('http://127.0.0.1:3001/protected-jwt', { headers: this.headers });
}




// Testings
testingUsers(){
  return this.http.get<any>('http://127.0.0.1:3001/users');
}

// Speed testing..
speedOnlineUsers(){
  return this.http.get<any>('https://speed4nigeria.herokuapp.com/api/online');
}

speedUsers(){
  return this.http.get<any>('https://speed4nigeria.herokuapp.com/api/auth');
}
 star
getSpeedAllQuiz(){
  return this.http.get<any>(`https://speed4nigeria.herokuapp.com/api/quiz`);
}


getSpeedSingleQuiz(user){
  return this.http.get<any>(`http://localhost:5000/api/quiz/single?user=${user}`);
}

// chat
speedGetAllChat(){
  return this.http.get<any>(`'https://speed4nigeria.herokuapp.com/api/chat`);
}
speedGetUserChat(user: any, quiz: any){

  return this.http.get<any>(`'https://speed4nigeria.herokuapp.com/api/chat/user?user=${user}&quiz=${quiz}`);

}
speedPostChat(user: any){
  return this.http.post<any>(`'https://speed4nigeria.herokuapp.com/api/chat`, user);
}


setQuiz( allQuiz: any){
  return this.http.post<any>(`'https://speed4nigeria.herokuapp.com/api/chat`, allQuiz);
}

}



