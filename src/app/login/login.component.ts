import { Component } from '@angular/core';
import {FormGroup ,FormControl,Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from 'src/core/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoading:boolean=false
  apiError:string = ''
  constructor(private _Authservice:AuthService , private _Router:Router){
    if(localStorage.getItem('userToken') !==null){
      _Router.navigate(['/home'])
    }
  }
loginForm:FormGroup =new FormGroup ({
  name : new FormControl ('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
  email:new FormControl ('',[Validators.required,Validators.email]),
  password:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),
  rePassword:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),
  phone:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(12)])
}
// ,{validators:this.rePassswordMatch}
)



// rePassswordMatch(loginForm:any){
//   let passwordControl =loginForm.get('password')
//   let repasswordControl =loginForm.get('rePassword')
//   if(passwordControl.value ==repasswordControl.value){
//       return null
//   }else{
//     repasswordControl.setErrors({passwordMatch:'password and repassword dont match'})
//     return {passwordMatch:'password and repassword dont match'}
//   }

// }

handlelogin(loginnform:FormGroup){
  this.isLoading =true;

if(loginnform.valid){
  
  this._Authservice.login(loginnform.value).subscribe({
    next:(response)=>{
      console.log(response);
      
      if (response.message === 'success'){
        this.isLoading =false;
        this._Router.navigate(['/register'])
      }
    },
    error:(err)=>{
      this.isLoading =false;

      console.log(err);

      
this.apiError=err.error.errors.msg      

    }})


  
}

  

}
}



