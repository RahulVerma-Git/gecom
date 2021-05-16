import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item';
import { CartComponent } from '../cart/cart.component';

class Filter{
  catagory:string="all";
  caret:string="all";
  priceRange:string="all";
  sortBy:string="PRICE_LOW_TO_HIGH";
}
declare var $:any;
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  filter:Filter;
  items:Item[]=[];
  filteredItems:Item[]=[];
  constructor(public cartComponent:CartComponent) { }

  ngOnInit(): void {
    this.filter=new Filter();
    this.items=[{
      productId:1,
      productName:"Gold Bangle",
      productPrice:10000,
      imagePath:"assets/images/sliderimg1.jpg",
      productDescription:"About Product",
      catagory:"Bangle",
      caret:"24",
      isFeatured:true
    },
    {
      productId:1,
      productName:"Gold Biscuit",
      productPrice:10000,
      imagePath:"assets/images/sliderimg2.jpg",
      productDescription:"About Product",
      catagory:"Solid Gold",
      caret:"24",
      isFeatured:true
    },
    {
      productId:1,
      productName:"Gold Bangle",
      productPrice:100000,
      imagePath:"assets/images/sliderimg3.jpg",
      productDescription:"About Product",
      catagory:"Bangle",
      caret:"24",
      isFeatured:true
    },
    {
      productId:1,
      productName:"Gold Bangle",
      productPrice:100000,
      imagePath:"assets/images/sliderimg1.jpg",
      productDescription:"About Product",
      catagory:"Bangle",
      caret:"24",
      isFeatured:true
    },
    {
      productId:1,
      productName:"Gold Biscuit",
      productPrice:100000,
      imagePath:"assets/images/sliderimg2.jpg",
      productDescription:"About Product",
      catagory:"Solid Gold",
      caret:"24",
      isFeatured:true
    }];
    this.filterItem();
  }

  previewImages(){
    $("#previewImagesPopUp").modal("show");
  }
  closepreviewImages(){
    $("#previewImagesPopUp").modal("hide");
  }
  filterItem(){
    var thisClass=this;
    this.filteredItems = this.items;
      if(this.filter.catagory!="all"){
        this.filteredItems = this.items.filter(function(t){
          return (t.catagory==thisClass.filter.catagory);
        });
      }
      if(this.filter.caret!="all"){
        this.filteredItems = this.filteredItems.filter(function(t){
          return (t.caret==thisClass.filter.caret);
        });
      }
      if(this.filter.priceRange!="all"){
        var min = Number(this.filter.priceRange.split("-")[0]);
        var max= this.filter.priceRange.split("-")[1]!="x"?Number(this.filter.priceRange.split("-")[1]):Number.POSITIVE_INFINITY
        this.filteredItems = this.filteredItems.filter(function(t){
          return (t.productPrice<=max && t.productPrice>=min);
        });
      }
      switch(this.filter.sortBy){
        case "PRICE_LOW_TO_HIGH":
          this.filteredItems = this.filteredItems.sort(function(t1,t2){
            return t1.productPrice-t2.productPrice;
          })
          break;
        case "PRICE_HIGH_TO_LOW":
          this.filteredItems = this.filteredItems.sort(function(t1,t2){
            return t2.productPrice-t1.productPrice;
          })
          break;
      }
  }
  addToCart(item:Item){
    this.cartComponent.addToCart(item);
  }
}
