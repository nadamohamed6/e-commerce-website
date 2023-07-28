import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CategoriesComponent } from './categories/categories.component';
import { CartComponent } from './cart/cart.component';
import { BrandsComponent } from './brands/brands.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CheckOutComponent } from './check-out/check-out.component';


const routes: Routes = [
  {path:'' , redirectTo:'home' ,pathMatch:'full'},
  {path:'home' ,canActivate:[AuthGuard] ,component:HomeComponent},
  {path:'about' , canActivate:[AuthGuard] ,component:AboutComponent},
  {path:'categories' , canActivate:[AuthGuard] ,component:CategoriesComponent},
  {path:'cart' ,canActivate:[AuthGuard] , component:CartComponent},
  {path:'brands' ,canActivate:[AuthGuard] , component:BrandsComponent},
  {path:'product' ,canActivate:[AuthGuard] , component:ProductsComponent},
{path:'checkout',canActivate:[AuthGuard],component:CheckOutComponent},
  {path:'ProductDetails/:id' ,canActivate:[AuthGuard] , component:ProductDetailsComponent},

  
  {path:'settings' ,loadChildren:()=>import('./settings/settings.module').then((res)=>res.SettingsModule)},
  {path:'login' , component:LoginComponent},
  {path:'register' , component:RegisterComponent},
  {path:'**' , component:NotfoundComponent},







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
