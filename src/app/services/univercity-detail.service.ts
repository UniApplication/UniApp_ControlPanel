import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/ResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { Univercity } from '../models/univercity';
import { UnivercityDetail } from '../models/univercityDetailModel';

@Injectable({
  providedIn: 'root'
})
export class UnivercityDetailService {

  
  constructor(private httpClient:HttpClient) { }

  getUnivercityDetail():Observable<ListResponseModel<UnivercityDetail>>{

    let newPath=environment.apiUrl+"univercities/getalldetail";
    return this.httpClient.get<ListResponseModel<UnivercityDetail>>(newPath);
  }
  getOnlyUnivercityDetail(univercityId:Number):Observable<SingleResponseModel<UnivercityDetail>>{

    let newPath=environment.apiUrl+"univercities/getbyiddetail?Id="+univercityId;
    return this.httpClient.get<SingleResponseModel<UnivercityDetail>>(newPath);
  }
  getOnlyUnivercity(univercityId:Number):Observable<SingleResponseModel<Univercity>>{

    let newPath=environment.apiUrl+"univercities/getbyid?Id="+univercityId;
    return this.httpClient.get<SingleResponseModel<Univercity>>(newPath);
  }
  getUnivercityDetailByCity(cityId:Number):Observable<ListResponseModel<UnivercityDetail>>{

    let newPath=environment.apiUrl+"univercities/getdetailbycityid?Id="+cityId;
    return this.httpClient.get<ListResponseModel<UnivercityDetail>>(newPath);
  }
  getUnivercityAdd(univercity:Univercity):Observable<ResponseModel>{

    let newPath=environment.apiUrl+"univercities/add";
    return this.httpClient.post<ResponseModel>(newPath,univercity)
  }
  getUnivercities():Observable<ListResponseModel<Univercity>>{

    let newPath=environment.apiUrl+"univercities/getall";
    return this.httpClient.get<ListResponseModel<Univercity>>(newPath)
  }
  unidelete(univercity:Univercity):Observable<SingleResponseModel<Univercity>>{
    let newPath = environment.apiUrl + "univercities/delete";
    return this.httpClient.post<SingleResponseModel<Univercity>>(newPath,univercity);
  }
  uniUpdate(univercity:Univercity):Observable<ResponseModel>{
    let newPath = environment.apiUrl + "univercities/update";
    return this.httpClient.post<ResponseModel>(newPath,univercity);
  }
}
