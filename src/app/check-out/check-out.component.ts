import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService } from 'src/core/services/cart.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent {
  constructor(private _CartService:CartService){}
  navigateToPage(url:string){
    window.location.href=url

  }


  shippingAddress:FormGroup =new FormGroup({
    details:new FormControl(null),
    phone:new FormControl(null),
    city:new FormControl(null)
  })

  handleSumbit(shippingAddress:FormGroup){
    console.log(shippingAddress.value);
    this._CartService.onlinePayment(shippingAddress.value,"64c2909f98d43e1bef1030a4").subscribe({
      next:(res:any)=>{
        this.navigateToPage(res.session.url)
        console.log(res.session.url);
        
      },error:(err)=>{
        console.log(err);
        
      }
    })
    

    
  }

}
