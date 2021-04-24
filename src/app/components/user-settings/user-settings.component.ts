import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserModel } from 'src/app/models/userModel';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {

  users:UserModel[]
  constructor(private userService:UserService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
      this.userService.getUsers().subscribe((response)=>{
        this.users=response.data;
      },responseError => {
        this.toastrService.error("Yetki Reddedildi")
      })
    
  }
}
