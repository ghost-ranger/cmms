import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManageService {
url="https://presageinsights.ai/cmms-api/api/users/login"
  constructor(private http:HttpClient) { }
  getList(){
    return this.http.get(this.url);
    console.warn("some data")
  }
  saveLogin(data: any){
      const headers={'content-type':'application/json'}
      data=JSON.stringify(data)
      this.http.post<any>(this.url,data,{'headers':headers}).subscribe(result => {
        console.log(result)
      })
  }
}
