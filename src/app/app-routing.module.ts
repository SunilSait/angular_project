import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopDetailsPageComponent } from './components/shop-details-page/shop-details-page.component';
import { ShopListPageComponent } from './components/shop-list-page/shop-list-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"HomePage",
    pathMatch:"full"
  },
  {    path:"HomePage",
    component:HomePageComponent
  },
  {    path:"AboutUs",
    component:AboutPageComponent
  },
  {    path:"ContactUs",
    component:ContactPageComponent
  },
  {    path:"ShopLists",
    component:ShopListPageComponent
  },
  {    path:"ShopDetails",
    component:ShopDetailsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
