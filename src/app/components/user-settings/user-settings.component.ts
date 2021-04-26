import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserModel } from 'src/app/models/userModel';
import { ClaimModel } from 'src/app/models/claimModel';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {

  users:UserModel[];
  claims:ClaimModel[];
  constructor(private userService:UserService,
    private toastrService:ToastrService,
    private router:Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
      this.userService.getUsers().subscribe((response)=>{
        this.users=response.data;
      },responseError => {
        this.toastrService.error("Yetki Reddedildi")
        this.router.navigate(["/main"])
      }) 
  }
  userDelete(user:UserModel){

    this.userService.getUserDelete(user).subscribe(response=>{
      this.toastrService.info(response.message);
      window.location.reload();
    },responseError=>this.toastrService.error("Silinmedi"))
  }
  
}

