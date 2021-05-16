import { Component, OnInit, Injectable } from '@angular/core';
import { Item } from 'src/app/model/item';
import { AnnouncementBarComponent } from '../announcement-bar/announcement-bar.component';
declare var $ : any;
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems:Item[];
  constructor(public announcementBarComponent:AnnouncementBarComponent) { }

  ngOnInit(): void {
    this.showCart();
  }

  showCart(){
    this.cartItems = JSON.parse(window.localStorage.getItem("mycart"));
    if(!this.cartItems){
      this.cartItems=[];
    }
    $("#cartItem").attr("data-count",this.cartItems.length);
  }
  addToCart(item:Item){
    this.showCart();
    this.cartItems.push(item);
    $("#cartItem").attr("data-count",this.cartItems.length);
    window.localStorage.setItem("mycart",JSON.stringify(this.cartItems));
    this.announcementBarComponent.displayAnnouncementBar("Item has been added to you cart","notify");
  }
  removeItemFromCart(item:Item){
    this.showCart();
    var index:number = this.cartItems.indexOf(item);
    this.cartItems.splice(index,1);
    $("#cartItem").attr("data-count",this.cartItems.length);
    window.localStorage.setItem("mycart",JSON.stringify(this.cartItems));
    if(this.cartItems == null || this.cartItems.length==0){
      this.announcementBarComponent.displayAnnouncementBar("Your cart is empty now","notify");
    }
  }
  clearCart(){
    this.showCart();
    this.cartItems.splice(0);
    $("#cartItem").attr("data-count",this.cartItems.length);
    window.localStorage.setItem("mycart",JSON.stringify(this.cartItems));
    this.announcementBarComponent.displayAnnouncementBar("Your cart is empty now","notify");
  }

}
