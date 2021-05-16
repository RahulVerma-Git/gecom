import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login/login.component';
import { WindowRefService } from 'src/app/service/window-ref/window-ref.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public windowRefService:WindowRefService,public loginComponent:LoginComponent) { }

  isLoggedIn:boolean = false;
  ngOnInit(): void {
    this.isUserLoggedIn();
  }
  isUserLoggedIn(){
    this.isLoggedIn=false;
    if(this.windowRefService.nativeWindow.sessionStorage.getItem("name")!=null && this.windowRefService.nativeWindow.sessionStorage.getItem("name").length>0){
      this.isLoggedIn=true;
    }
  }
  logout(){
    this.loginComponent.logout();
  }
}
