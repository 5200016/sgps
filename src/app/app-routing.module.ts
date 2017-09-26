import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FreshFruitComponent } from './ZS/fresh-fruit/FreshFruitComponent';
import { FixedPackagesComponent } from './ZS/fixed-packages/FixedPackagesComponent';
import { CustomPackagesComponent } from './ZS/custom-packages/CustomPackagesComponent';
import { MineComponent } from './ZS/mine/MineComponent';
import {HomepageComponent} from './ZS/homepage/HomepageComponent';
import {ProductDetailsComponent} from './ZS/product-details/ProductDetailsComponent';
import {AdDetailsComponent} from './ZS/ad-details/AdDetailsComponent';
import { HomepageHeadComponent } from './ZS/homepage-head/HomepageHeadComponent';
import { BalanceFirstContentComponent } from './ZS/balance-firstContent/balance-firstContent.component';
import { BalanceSecondContentComponent } from './ZS/balance-secondContent/balance-secondContent.component';
import { BalanceScAddressComponent } from './ZS/balance-sc-address/balanceScAddress.component';
import { ReviewComponent } from './ZS/review/reviewComponent';
/* 二级路由 */
const childRoutes: Routes = [
  { path:  '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'fresh-fruit', component: FreshFruitComponent },
  { path: 'fixed-packages', component: FixedPackagesComponent },
  { path: 'custom-packages', component: CustomPackagesComponent },
  { path: 'mine', component: MineComponent },
  { path: 'product-details', component: ProductDetailsComponent },
  { path: 'mine', component: MineComponent },
  { path: 'review', component: ReviewComponent }
]
/* 一级路由 */
const routes: Routes = [
  {path: 'ad-details', component: AdDetailsComponent },
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {
    path: 'index',
    component: HomepageHeadComponent,
    children: childRoutes
  },
  {
    path: 'balance-firstContent',
    component: BalanceFirstContentComponent
  },
  {
    path: 'balance-secondContent',
    component: BalanceSecondContentComponent
  },
  {
    path: 'balanceScAddress',
    component: BalanceScAddressComponent
  },

];
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
