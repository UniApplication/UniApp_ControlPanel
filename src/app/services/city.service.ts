import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CityModel } from '../models/cityModel';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private httpClient:HttpClient) { }

  getCity():Observable<ListResponseModel<CityModel>>{

    let newPath=environment.apiUrl+"cities/getall";
    return this.httpClient.get<ListResponseModel<CityModel>>(newPath);
  }
}
