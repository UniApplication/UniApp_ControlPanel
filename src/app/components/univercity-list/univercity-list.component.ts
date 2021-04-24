import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Univercity } from 'src/app/models/univercity';
import { UnivercityDetail } from 'src/app/models/univercityDetailModel';
import { UnivercityDetailService } from 'src/app/services/univercity-detail.service';

@Component({
  selector: 'app-univercity-list',
  templateUrl: './univercity-list.component.html',
  styleUrls: ['./univercity-list.component.css']
})
export class UnivercityListComponent implements OnInit {

  univercities:Univercity[];
  filterText:"";
  constructor(private univercityDetailService:UnivercityDetailService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getUnivercities()
  }

  getUnivercities(){
    this.univercityDetailService.getUnivercities().subscribe((response)=>{
      this.univercities=response.data;
    })
  }
  univercityDelete(univercity:Univercity){
    this.univercityDetailService.unidelete(univercity).subscribe(response=>{
      this.toastrService.info(response.message)
      window.location.reload();
    },responseError=>{
      this.toastrService.info(responseError.message)
    })
  }

}
