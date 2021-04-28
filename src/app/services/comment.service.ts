import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CommentModel } from '../models/commentModel';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/ResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient:HttpClient) { }

  commentGetAll(univercityId:number):Observable<ListResponseModel<CommentModel>>{

    let newPath=environment.apiUrl+"comments/getbyunivercityid?Id="+univercityId;
    return this.httpClient.get<ListResponseModel<CommentModel>>(newPath)
  }
  commentDelete(comment:CommentModel):Observable<ResponseModel>{

    let newPath=environment.apiUrl+"comments/delete";
    return this.httpClient.post<ResponseModel>(newPath,comment)
  }
  
}
