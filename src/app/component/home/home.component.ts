import { Component, OnInit } from '@angular/core';
import { Item } from "../../model/item";
import { CartComponent } from '../cart/cart.component';

declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items:Item[]=[];
  constructor(public cartComponent:CartComponent) { }

  ngOnInit(): void {
    this.items=[{
      productId:1,
      productName:"Gold Bangle",
      productPrice:1000,
      imagePath:"assets/images/sliderimg1.jpg",
      productDescription:"About Product",
      catagory:"Bangle",
      caret:"24",
      isFeatured:true
    },
    {
      productId:1,
      productName:"Gold Biscuit",
      productPrice:1000,
      imagePath:"assets/images/sliderimg2.jpg",
      productDescription:"About Product",
      catagory:"Bangle",
      caret:"24",
      isFeatured:true
    },
    {
      productId:1,
      productName:"Gold Bangle",
      productPrice:1000,
      imagePath:"assets/images/sliderimg3.jpg",
      productDescription:"About Product",
      catagory:"Bangle",
      caret:"24",
      isFeatured:true
    },
    {
      productId:1,
      productName:"Gold Bangle",
      productPrice:1000,
      imagePath:"assets/images/sliderimg1.jpg",
      productDescription:"About Product",
      catagory:"Bangle",
      caret:"24",
      isFeatured:true
    },
    {
      productId:1,
      productName:"Gold Biscuit",
      productPrice:1000,
      imagePath:"assets/images/sliderimg2.jpg",
      productDescription:"About Product",
      catagory:"Bangle",
      caret:"24",
      isFeatured:true
    }];
  }
  addToCart(item:Item){
    this.cartComponent.addToCart(item);
  }
  previewImages(){
    $("#previewImagesPopUp").modal("show");
  }
  closepreviewImages(){
    $("#previewImagesPopUp").modal("hide");
  }

}
