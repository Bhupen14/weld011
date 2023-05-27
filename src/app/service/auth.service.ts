import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'server/users';
// import 'rxjs/add/operator/catch';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  loginUser(userData)
  {
// cellphone
    return this.http.post<any>('http://192.168.43.138:3000/api/login',userData);
// local
    // return this.http.post<any>('http://192.168.1.32:3000/api/login',userData);
    // return this.http.post<any>('http://localhost:3000/api/login',userData);
  }

 

  // loginUser(userData)
  // {
  //   return this.http.post<any>('http://192.168.1.32:3000/api/login',userData);
  //   // return this.http.post<any>('http://localhost:3000/api/login',userData);
  // }


  loggedIn()
  {
    return !!localStorage.getItem('token');
  }
getToken()
{
  return localStorage.getItem('token');
}


}
