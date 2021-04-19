import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,
    private authService:AuthService,
    private toastrservice:ToastrService,private _router:Router) { }

  registerForm:FormGroup;
  ngOnInit(): void {
  this.createRegisterForm();
  }
  createRegisterForm(){
    this.registerForm=this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required],
      firstName:["",Validators.required],
      lastName:["",Validators.required],
    })
  }
  register(){
    if(this.registerForm.valid){
      console.log(this.registerForm.value)
      let registerModel=Object.assign({},this.registerForm.value)

      this.authService.register(registerModel).subscribe(response=>{ 
        this.toastrservice.info(response.message);
        localStorage.setItem("token",response.data.token)
        console.log(response)
        this._router.navigate([""])
      },responseError=>{this.toastrservice.error(responseError.error.Errors[0].ErrorMessage)})
    }
  }
}

