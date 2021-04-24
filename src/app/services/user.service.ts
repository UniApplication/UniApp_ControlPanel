import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { UserModel } from '../models/userModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  getUserInfo(userId:number):Observable<SingleResponseModel<UserModel>>{

    let newPath=environment.apiUrl+"users/getbyid?Id="+userId;
    return this.httpClient.get<SingleResponseModel<UserModel>>(newPath);
    
  }
  getUsers():Observable<ListResponseModel<UserModel>>{

    let newPath=environment.apiUrl+"users/getall";
    return this.httpClient.get<ListResponseModel<UserModel>>(newPath);
    
  }
}
