import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUserModel } from '../Models/userModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'https://localhost:5001/api/'
  private currentUserSubject = new BehaviorSubject<IUserModel>(null);
  currentUser$ = this.currentUserSubject.asObservable();
  constructor(private http: HttpClient, private router: Router) { }

  login(values: any){
    return this.http.post(this.url + 'users/login', values).pipe(map((user: IUserModel) =>{
      if(user) {
        localStorage.setItem('token', user.token);
        this.currentUserSubject.next(user);
      }
    }))
  }

  register(values: any){
    return this.http.post(this.url + 'users/register', values).pipe(map((user: IUserModel) =>{
      if(user) {
        localStorage.setItem('token', user.token);
        this.currentUserSubject.next(user);
      }
    }))
  }

  logout(){
    localStorage.removeItem('token');
    this.currentUserSubject.next(null);
    this.router.navigateByUrl('/');
  }

  checkEmailExists(email: string) {
    return this.http.get(this.url + 'users/emailexists?email=' + email);
  }

  loadCurrentUser(token: string) {
    // if (token == null) {
    //   this.currentUserSubject.next(null);
    //   return null;
    // }

    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);

    return this.http.get(this.url + 'users', {headers}).pipe(
      map((user: IUserModel) => {
        if (user) {
          localStorage.setItem('token', user.token);
          this.currentUserSubject.next(user);
        }
      })
    )
  }

  getCurrentUserValue() {
    return this.currentUserSubject.value;
  }

}
