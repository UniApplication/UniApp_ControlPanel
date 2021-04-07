import { Component, OnInit } from '@angular/core';
import { UnivercityDetail } from 'src/app/models/univercityDetailModel';
import { UnivercityDetailService } from 'src/app/services/univercity-detail.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-univercity-detail',
  templateUrl: './univercity-detail.component.html',
  styleUrls: ['./univercity-detail.component.css']
})
export class UnivercityDetailComponent implements OnInit {

  constructor(private univercityDetailService:UnivercityDetailService) { }

  univercityDetails:UnivercityDetail[];
  baseApiUrl=environment.baseApiUrl
  ngOnInit(): void {
    this.getUnivercityDetails();
  }

  getUnivercityDetails(){
    this.univercityDetailService.getUnivercityDetail().subscribe((response)=>{
      this.univercityDetails=response.data;
      console.log(this.univercityDetails)
    })
  }
}
