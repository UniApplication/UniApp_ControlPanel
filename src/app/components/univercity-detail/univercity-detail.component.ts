import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UnivercityDetail } from 'src/app/models/univercityDetailModel';
import { UnivercityDetailService } from 'src/app/services/univercity-detail.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-univercity-detail',
  templateUrl: './univercity-detail.component.html',
  styleUrls: ['./univercity-detail.component.css']
})
export class UnivercityDetailComponent implements OnInit {

  constructor(private univercityDetailService:UnivercityDetailService,private activatedRoute:ActivatedRoute) { }

  univercityDetails:UnivercityDetail[];
  baseApiUrl=environment.baseApiUrl;
  filterText:"";
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["cityId"]){
        this.getUnivercityById(params["cityId"]);
      }else{
         this.getUnivercityDetails();
      }
    });
   
  }

  getUnivercityDetails(){
    this.univercityDetailService.getUnivercityDetail().subscribe((response)=>{
      this.univercityDetails=response.data;
    })
  }
  getUnivercityById(cityId:Number){
    this.univercityDetailService.getUnivercityDetailByCity(cityId).subscribe(response => {
      this.univercityDetails = response.data;
    })
  }
}
