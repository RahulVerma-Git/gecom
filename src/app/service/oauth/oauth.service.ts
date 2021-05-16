import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators'
import { ConstantService } from '../constant/constant.service';

@Injectable({
  providedIn: 'root'
})
export class OauthService {

  constructor(public http:HttpClient,public constantService:ConstantService) { }

  login(user:any):Observable<any>{
    return this.http.post(this.constantService.getServerBaseURL()+"/oauth/login",user)
    .pipe(catchError(error=>{
      console.log(error);
      return null;
    }));
  }
}
