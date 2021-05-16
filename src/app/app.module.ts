import { BrowserModule } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {WebcamModule} from 'ngx-webcam';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { FooterComponent } from './component/footer/footer.component';
import { CatalogComponent } from './component/catalog/catalog.component';
import { CartComponent } from './component/cart/cart.component';
import { MyCartComponent } from './component/my-cart/my-cart.component';
import {WindowRefService} from './service/window-ref/window-ref.service';
import { AnnouncementBarComponent } from './component/announcement-bar/announcement-bar.component';
import { LoginComponent } from './component/login/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    CatalogComponent,
    CartComponent,
    MyCartComponent,
    AnnouncementBarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    WebcamModule
  ],
  providers: [WindowRefService],
  bootstrap: [AppComponent]
})
export class AppModule { }
