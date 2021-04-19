import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,
    private authService:AuthService,
    private toastrservice:ToastrService,private _router:Router) { }

  loginForm:FormGroup;
  email="";
  ngOnInit(): void {
  this.createLoginForm();
  }
  createLoginForm(){
    this.loginForm=this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required],
    })
  }
  login(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value)
      let loginModel=Object.assign({},this.loginForm.value)
      environment.userName=this.email
      console.log(environment.userName)
      this.authService.login(loginModel).subscribe(response=>{ 
        this.toastrservice.info(response.message);
       let u= localStorage.setItem("token",response.data.token);
        console.log(u)
        this._router.navigate(["main"])
      },responseError=>{this.toastrservice.error(responseError.error.Errors[0].ErrorMessage)})
    }
  }
}
