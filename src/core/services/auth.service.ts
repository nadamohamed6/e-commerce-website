import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,BehaviorSubject} from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData:BehaviorSubject<any> =new BehaviorSubject(null);

  constructor(private _Httpclient:HttpClient ,private _Router:Router) { 
   if(localStorage.getItem('userToken') !==null){
    this.decodeUserData()
   }
  }
  logOut(){
    localStorage.removeItem('userToken');
    this.userData.next(null)
    this._Router.navigate(['/register'])
  }

  decodeUserData(){
    let encodedToken=JSON.stringify(localStorage.getItem('userToken'));
    let decodedToken:any=jwtDecode(encodedToken)
    console.log(decodedToken);
    
    this.userData.next(decodedToken);
    console.log(this.userData); 
    
  }

  login(userData:object):Observable<any>{
    return this._Httpclient.post('https://ecommerce.routemisr.com/api/v1/auth/signup',userData)
  }


register(userData:object):Observable<any>{
  return this._Httpclient.post('https://ecommerce.routemisr.com/api/v1/auth/signin',userData)
}

}
