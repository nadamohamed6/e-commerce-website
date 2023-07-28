import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  isLoading:boolean =false;
  apiErrors:string ='';
  constructor(private _AuthService:AuthService , private _Router:Router){
    if(localStorage.getItem('userToken') !==null){
      _Router.navigate(['/home'])
    }
  }


registerForm:FormGroup =new FormGroup({

  email: new FormControl('' ,[Validators.required,Validators.email]),
  password: new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)])
})


  handleRegister(registrationForm:FormGroup){
    this.isLoading=true
    if(registrationForm.valid){
      this._AuthService.register(registrationForm.value).subscribe({
        next:(response)=>{
          console.log(response);
          
          if(response.message === 'success'){
            this.isLoading=false;

            localStorage.setItem('userToken',response.token);
            this._AuthService.decodeUserData()
            this._Router.navigate(['/home'])
            
          }
        },
        error:(err)=>{
          this.isLoading=false;
          console.log(err);
          
          this.apiErrors=err.error.errors.msg;
          

        }
      })
    }
    

  }


}
