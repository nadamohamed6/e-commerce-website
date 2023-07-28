import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/core/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  CartDetails:any=null
  constructor(private _CartService:CartService ){}



updateItemCount(productId:string,count:number){
  this._CartService.updateItemCount(productId,count).subscribe({
    next:(res)=>{
      this.CartDetails=res.data
      console.log(res.data);
      

    },error:(err)=>{
      console.log(err);
      
    }
  })

}
  removeItem(productId:string){
    this._CartService.removeCartItems(productId).subscribe({
      next:(res)=>{
        this.CartDetails=res.data
        console.log(res.data);
        
      },error:(err)=>{
        console.log(err);
        
      }
    })

  }

  ngOnInit(): void {
  
      this._CartService.getLoggedUserCart().subscribe({
        next:(res)=>{
         this.CartDetails=res.data
         console.log(this.CartDetails);
         
          
        },
        error:(err)=>{console.log(err);
        }
        
      })
    } 
  } 

 
