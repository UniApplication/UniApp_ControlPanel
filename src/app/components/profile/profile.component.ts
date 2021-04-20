import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from 'src/app/models/userModel';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:UserModel
  constructor(private userService:UserService,
    private activatedRoute:ActivatedRoute,private _router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["userId"]){
        this.getUserInfo(params["userId"]);
      }
    });
  }
    
  getUserInfo(userId:number){
    this.userService.getUserInfo(userId).subscribe(response=>{
      this.user=response.data
    })
  }
  clearLocalStorage(){
    localStorage.clear()
    this._router.navigate(["login"])

  }
}
