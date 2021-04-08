import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from '../models/listResponseModel';
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
}