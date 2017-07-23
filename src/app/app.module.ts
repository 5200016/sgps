import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { KSSwiperModule } from 'angular2-swiper';
import { LoginHeadComponent } from './ZS/login-head/LoginHeadComponent';
import { LoginBottomComponent } from './ZS/login-bottom/LoginBottomComponent';
import { FruitRegisterComponent } from './ZS/fruit-register/FruitRegisterComponent';
import { FruitLoginComponent } from './ZS/fruit-login/FruitLoginComponent';
import { HomepageHeadComponent } from './ZS/homepage-head/HomepageHeadComponent';
import { LosePasswordComponent } from './ZS/lose-password/LosePasswordComponent';
import { NewPasswordComponent } from './ZS/new-password/NewPasswordComponent';
import { QuickLandingComponent } from './ZS/quick-landing/QuickLandingComponent';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { FreshFruitComponent } from './ZS/fresh-fruit/FreshFruitComponent';
import { FixedPackagesComponent } from './ZS/fixed-packages/FixedPackagesComponent';
import { CustomPackagesComponent } from './ZS/custom-packages/CustomPackagesComponent';
import { HomepageComponent } from './ZS/homepage/HomepageComponent';
import { MineComponent } from './ZS/mine/MineComponent';
import { ProductDetailsComponent } from './ZS/product-details/ProductDetailsComponent';
import {AdDetailsComponent} from './ZS/ad-details/AdDetailsComponent';

declare var $: any;
@NgModule({
  declarations: [
    AppComponent,
    FruitRegisterComponent,
    FruitLoginComponent,
    LoginHeadComponent,
    HomepageHeadComponent,
    LoginBottomComponent,
    LosePasswordComponent,
    NewPasswordComponent,
    QuickLandingComponent,
    FreshFruitComponent,
    FixedPackagesComponent,
    CustomPackagesComponent,
    MineComponent,
    HomepageComponent,
    ProductDetailsComponent,
    AdDetailsComponent
  ],
  imports: [
    KSSwiperModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
  ],
/*  bootstrap: [AppComponent]*/
  bootstrap: [HomepageHeadComponent]
})

export class AppModule {

}

