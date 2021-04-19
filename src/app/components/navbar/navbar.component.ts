import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userName=environment.userName
  constructor() { }

  ngOnInit(): void {
    this.getUserInfo()
  }
  
  getUserInfo(){
    let user:any=localStorage.getItem("userId")
    console.log(user)
  }
}
