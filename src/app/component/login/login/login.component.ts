import { Component, OnInit, Injectable } from '@angular/core';
import { WindowRefService } from 'src/app/service/window-ref/window-ref.service';
import { OauthService } from 'src/app/service/oauth/oauth.service';
import { RouterLink, Router } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';
import { AnnouncementBarComponent } from '../../announcement-bar/announcement-bar.component';
import { EmailValidator } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string;
  password:string;

  constructor(public windowRefService:WindowRefService,
    public router:Router,
    public announcementBarComponent:AnnouncementBarComponent,
    public oauthService:OauthService) { }

  ngOnInit(): void {
    var username = this.windowRefService.nativeWindow.sessionStorage.getItem("name");
    if(username){
      this.router.navigate(["/home"]);
      this.announcementBarComponent.displayAnnouncementBar("Welcome "+username,"notify");
    }
  }
  login(){
    var user={
      email:this.email,
      password:this.password
    }
    this.oauthService.login(user)
    .subscribe(response=>{
      this.windowRefService.nativeWindow.sessionStorage.setItem("name","Mr.x");
      this.windowRefService.nativeWindow.location.reload();
    });
  }
  logout(){
    this.windowRefService.nativeWindow.sessionStorage.clear();
    this.announcementBarComponent.displayAnnouncementBar("You have logged out !","notify");
  }

}
