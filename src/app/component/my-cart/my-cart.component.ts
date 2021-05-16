import { Component, OnInit } from '@angular/core';

import { CartComponent } from '../cart/cart.component';
import { Item } from 'src/app/model/item';
import { RazorpayPayment } from 'src/app/model/razorpaypayment';
import {PaymentService} from '../../service/payment/payment.service'
import { WindowRefService } from 'src/app/service/window-ref/window-ref.service';
import { AnnouncementBarComponent } from '../announcement-bar/announcement-bar.component';

declare var $ : any;
@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {

  totalPrice:number=0;
  razorpayPayment:RazorpayPayment;

  constructor(public cartComponent:CartComponent,
    public paymentService:PaymentService,
    public windowRefService:WindowRefService,
    public announcementBarComponent:AnnouncementBarComponent) { }

  ngOnInit(): void {
    this.cartComponent.showCart();
    this.cartComponent.cartItems.forEach(element => {
      this.totalPrice = this.totalPrice + element.productPrice;
    });
    console.log($("#announcementMsg"));
  }
  removeItemFromCart(item:Item){
    this.cartComponent.removeItemFromCart(item);
    this.totalPrice = 0;
    this.cartComponent.cartItems.forEach(element => {
      this.totalPrice = this.totalPrice + element.productPrice;
    });
  }
  paynow(){
    var request = {
      amount: this.totalPrice,  // amount in the smallest currency unit(paise)
      currency: "INR",
      receipt: "order_rcptid_11"
    }
    this.paymentService.createRazorpayOrder(request)
    .subscribe(response=>{
      this.razorpayPayment = new RazorpayPayment("Mr.X","t@gmail.com","1111111111","my country","goldenrod");
      this.razorpayPayment.amount = this.totalPrice.toString();
      this.razorpayPayment.currency = "INR";
      this.razorpayPayment.description = "This is test payment";
      this.razorpayPayment.order_id = response.id;
      var classRef = this;
      this.razorpayPayment.handler= function(response){
        classRef.onPaymentSuccess(classRef.cartComponent,classRef.announcementBarComponent,response);
      };
      var rzp1 = new this.windowRefService.nativeWindow.Razorpay(this.razorpayPayment);
      rzp1.open();
      rzp1.on('payment.failed', function (response){
        alert(response.error.code);
      });
    })
  }

  onPaymentSuccess(cartComponentRef,announcementBarComponentRef, response){
    cartComponentRef.clearCart();
    announcementBarComponentRef.displayAnnouncementBar("Payment Success for Transaction Id : "+response.razorpay_order_id,"success");
    console.log("payment done");
  }
  

}
