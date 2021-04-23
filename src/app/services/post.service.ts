import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from '../models/listResponseModel';
import { PostDetail } from '../models/postDetail';
import { PostModel } from '../models/postModel';
import { ResponseModel } from '../models/ResponseModel';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient:HttpClient) { }

  postAdd(post:PostModel):Observable<ResponseModel>{

    let newPath=environment.apiUrl+"posts/add";
    return this.httpClient.post<ResponseModel>(newPath,post)
  }
  postGetAll():Observable<ListResponseModel<PostDetail>>{

    let newPath=environment.apiUrl+"posts/getalldetail";
    return this.httpClient.get<ListResponseModel<PostDetail>>(newPath)
  }
}
