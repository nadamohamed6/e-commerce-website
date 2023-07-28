import { Component } from '@angular/core';
import { AuthService } from 'src/core/services/auth.service';
import { CartService } from 'src/core/services/cart.service';
CartService
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  cartItemsNumber:number=0;
 
  isLogin:boolean=false;
  logOut(){
    this._AuthService.logOut();
  }
  constructor(private _AuthService:AuthService,private _CartService:CartService ){
    _CartService.numOfCartItems.subscribe({
      next:(res)=>{
        this.cartItemsNumber=res;
        console.log(this.cartItemsNumber);
        
      },error:(err)=>{
        console.log(err);
        
      }
    })

  
   this._AuthService.userData.subscribe(()=>{
     if(_AuthService.userData.getValue()!= null){
      this.isLogin=true;
     }else{
      this.isLogin=false
     }
    
    
    
   })

  }


}
