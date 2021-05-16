import { Injectable } from '@angular/core';

const razorpayHostURL:string = "https://api.razorpay.com";
const serverBaseURL:string = "http://192.168.0.11:8080";

@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  constructor() { }
  getRazorpayHostURL(){
    return razorpayHostURL;
  }
  getServerBaseURL(){
      return serverBaseURL;
  }
}
