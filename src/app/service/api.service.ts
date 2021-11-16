import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(  private _http: HttpClient,) { }

  commonPost(data:any, url:string) {
    let fullUrl = environment.baseURL + url;
    return this._http.post(fullUrl, data).pipe(
      map((response: any) => {
        
        if (response) {
         

          return response;
        } else {
         

          return {};
        }
      })
    );
  }

  commonPut(data:any, url:any) {
    let fullUrl = environment.baseURL + url;

    return this._http.put(fullUrl, data, ).pipe(
      map((response: any) => {
        
        if (response) {
         
          return response;
        } else {
         
          return {};
        }
      })
    );
  }
  commonGetAll(param:any) {
    let fullUrl = environment.baseURL+param ;
 

    return this._http.get(fullUrl, ).pipe(
      map((response: any) => {
        if (response) {
        ;
          return response;
        } else {
         
          return {};
        }
      })
    );
  }
  commonDelete(param:any) {
    let fullUrl = environment.baseURL + param;

    return this._http.delete(fullUrl, ).pipe(
      map((response: any) => {
        
        if (response) {
         
          return response;
        } else {
         
          return {};
        }
      })
    );
  }
}
