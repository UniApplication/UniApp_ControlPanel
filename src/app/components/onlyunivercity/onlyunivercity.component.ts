import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';
import { UnivercityDetail } from 'src/app/models/univercityDetailModel';
import { UnivercityDetailService } from 'src/app/services/univercity-detail.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-onlyunivercity',
  templateUrl: './onlyunivercity.component.html',
  styleUrls: ['./onlyunivercity.component.css']
})
export class OnlyunivercityComponent implements OnInit {

  univercity:UnivercityDetail;
  baseApiUrl=environment.baseApiUrl;
  isFollowing=false;
  constructor(private activatedRoute:ActivatedRoute,private univercityService:UnivercityDetailService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["univercityId"]){
        this.getOnlyUnivercity(params["univercityId"]);
      }
    });
  }

  getOnlyUnivercity(univercityId:Number){
    this.univercityService.getOnlyUnivercityDetail(univercityId).subscribe(response => {
      this.univercity = response.data;
    })
  }
  isUserFollowing(){
    this.isFollowing=false;
  }
  follow(){
    this.isFollowing=true;
  }
  unFollow(){
    this.isFollowing=false;
  }

}
