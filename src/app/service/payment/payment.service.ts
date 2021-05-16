import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators'

import {ConstantService} from '../constant/constant.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(public http:HttpClient,public constantService:ConstantService) { }

  createRazorpayOrder(request:any):Observable<any>{
    return this.http.post<any>(this.constantService.getServerBaseURL()+"/payment/createRazorpayOrder",request)
    .pipe(catchError(error=>{alert(error.message);return null;}));
  }
}
