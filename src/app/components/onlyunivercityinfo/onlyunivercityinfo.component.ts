import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UnivercityDetail } from 'src/app/models/univercityDetailModel';
import { UnivercityDetailService } from 'src/app/services/univercity-detail.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-onlyunivercityinfo',
  templateUrl: './onlyunivercityinfo.component.html',
  styleUrls: ['./onlyunivercityinfo.component.css']
})
export class OnlyunivercityinfoComponent implements OnInit {

  univercity:UnivercityDetail;
  baseApiUrl=environment.baseApiUrl;
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

}
