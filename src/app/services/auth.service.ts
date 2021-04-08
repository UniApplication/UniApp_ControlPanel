import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginModel } from '../models/loginModel';
import { RegisterModel } from '../models/registerModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    
    constructor(private httpClient:HttpClient) { }
    login(loginModel:LoginModel){
      return this.httpClient.post<SingleResponseModel<TokenModel>>(environment.apiUrl+"auth/login",loginModel)
    }
    isAuthenticated(){
      if(localStorage.getItem("token")){
        return true;
      }else {
        return false;
      }
    }
    register(registerModel:RegisterModel):Observable<SingleResponseModel<TokenModel>>{

      return this.httpClient.post<SingleResponseModel<TokenModel>>(environment.apiUrl + 'auth/register',registerModel);
    }
  
  }
