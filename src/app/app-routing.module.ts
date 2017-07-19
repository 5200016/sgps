import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FreshFruitComponent } from './ZS/fresh-fruit/FreshFruitComponent';
import { FixedPackagesComponent } from './ZS/fixed-packages/FixedPackagesComponent';
import { CustomPackagesComponent } from './ZS/custom-packages/CustomPackagesComponent';
import { MineComponent } from './ZS/mine/MineComponent';
import {HomepageComponent} from './ZS/homepage/HomepageComponent';
import {ProductDetailsComponent} from './ZS/product-details/product-details.component';

const routes: Routes = [
  { path:  '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'fresh-fruit', component: FreshFruitComponent },
  { path: 'fixed-packages', component: FixedPackagesComponent },
  { path: 'custom-packages', component: CustomPackagesComponent },
  { path: 'mine', component: MineComponent },
  { path: 'product-details', component: ProductDetailsComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
