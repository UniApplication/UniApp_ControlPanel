import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/userModel';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userInfo:UserModel; 
  user:any=localStorage.getItem("userId")
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    if(!this.user){

    }else{
      this.getUserInfo()
    }
    
  }
  
  getUserInfo(){
    this.userService.getUserInfo(parseInt(this.user)).subscribe(response=>{
      this.userInfo=response.data
    })
  }
}
