import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClaimModel } from '../models/claimModel';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/ResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { UserModel } from '../models/userModel';
import { UserOperationModel } from '../models/userOperationClaim';

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
  getUserDelete(user:UserModel):Observable<ResponseModel>{
    let newPath=environment.apiUrl+"users/delete";
    return this.httpClient.post<ResponseModel>(newPath,user);
    
  }
  getClaims(userId:number):Observable<ListResponseModel<UserOperationModel>>{
    let newPath=environment.apiUrl+"users/getclaimsbyuserid?userId="+userId;
    return this.httpClient.get<ListResponseModel<UserOperationModel>>(newPath);
  }
  getAllClaims():Observable<ListResponseModel<ClaimModel>>{
    let newPath=environment.apiUrl+"users/getallclaims";
    return this.httpClient.get<ListResponseModel<ClaimModel>>(newPath);
  }
  updateClaim(userOp:UserOperationModel):Observable<ResponseModel>{
    let newPath=environment.apiUrl+"users/postclaim";
    return this.httpClient.post<ResponseModel>(newPath,userOp);
  }
  deleteClaim(userOp:UserOperationModel):Observable<ResponseModel>{
    let newPath=environment.apiUrl+"users/deleteclaim";
    return this.httpClient.post<ResponseModel>(newPath,userOp);
  }

}
