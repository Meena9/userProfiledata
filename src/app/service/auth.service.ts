import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {userDetails,appConstant } from '../constants/appConstant'
interface loginUser{
username:string,
password:string
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
loginData(data:loginUser){

return false


}
getUser():any {
  return localStorage.getItem(appConstant.IS_USER);
}

setuser(user:string): void {
  localStorage.setItem(appConstant.IS_USER, user);
}

  isValidLogin(){
    console.log("islogin  ", this.getUser());
    let value=this.getUser()

    return value==='valid'?true:false
  }
}
