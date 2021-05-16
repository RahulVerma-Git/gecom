import { Component, OnInit, Injectable, OnDestroy } from '@angular/core';

declare var $ : any;
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-announcement-bar',
  templateUrl: './announcement-bar.component.html',
  styleUrls: ['./announcement-bar.component.css']
})
export class AnnouncementBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.hideAnnouncementBar();
  }
  displayAnnouncementBar(msg:string,type:string){
    $("#announcement-bar").css("visibility","visible");
    $("#announcement-bar").removeClass("fade-out");
    $("#announcement-bar").addClass("fade-in");
    switch(type){
      case "success": 
      $("#announcement-bar").css({"background":"green","color":"white"});
      $("#announcement-bar-msg").html(msg);
      break;
      case "failure": 
      $("#announcement-bar").css({"background":"red","color":"white"});
      $("#announcement-bar-msg").html(msg);
      break;
      case "warning": 
      $("#announcement-bar").css({"background":"orange","color":"white"});
      $("#announcement-bar-msg").html(msg);
      break;
      case "notify": 
      $("#announcement-bar").css({"background":"blue","color":"white"});
      $("#announcement-bar-msg").html(msg);
      break;
    }
    var classRef = this;
    setTimeout(function(){
      classRef.hideAnnouncementBar();
    },5000);
  }
  hideAnnouncementBar(){
    $("#announcement-bar").removeClass("fade-in");
    $("#announcement-bar").addClass("fade-out");
    setTimeout(function(){
      $("#announcement-bar").css("visibility","hidden");
    },5000);
  }
  closeAnnouncementBar(){
      $("#announcement-bar").css("visibility","hidden");
  }

}
