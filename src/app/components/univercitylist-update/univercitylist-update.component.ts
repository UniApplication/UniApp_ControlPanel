import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Univercity } from 'src/app/models/univercity';
import { UnivercityDetailService } from 'src/app/services/univercity-detail.service';

@Component({
  selector: 'app-univercitylist-update',
  templateUrl: './univercitylist-update.component.html',
  styleUrls: ['./univercitylist-update.component.css']
})
export class UnivercitylistUpdateComponent implements OnInit {

  UnivercityUpdateForm: FormGroup;
  univercity:Univercity;

  constructor(private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private univercityDetailService:UnivercityDetailService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(params => {
      if(params["univercityId"]){
        this.getOnlyUnivercity(params["univercityId"]);
      
      }  
    });
  }

  createUnivercityAddForm() {
    this.UnivercityUpdateForm = this.formBuilder.group({
      id:[this.univercity.id,Validators.required],
      univercityName: [this.univercity.univercityName, Validators.required],
      univercityDescription: [this.univercity.univercityDescription, Validators.required],
      univercityRector: [this.univercity.univercityRector, Validators.required],
      starCount: [this.univercity.starCount, Validators.required],
      cityId: [this.univercity.cityId, Validators.required]
    });
  }
  getOnlyUnivercity(univercityId:Number){
    this.univercityDetailService.getOnlyUnivercity(univercityId).subscribe(response => {
      this.univercity = response.data;
      this.createUnivercityAddForm()
    })
  }
  univercityUpdate() {
    console.log(this.UnivercityUpdateForm.value)
    if (this. UnivercityUpdateForm.valid) {
      let univercity = Object.assign({}, this.UnivercityUpdateForm.value);
      univercity.univercityId=this.univercity.id;
      this.univercityDetailService.uniUpdate(univercity).subscribe(
        response => {
          this.toastrService.success(response.message, 'Başarılı');
        },
        responseError => {
          if (responseError.error.Errors.length > 0) {
            for (let i = 0; i < responseError.error.Errors.length; i++) {
              this.toastrService.error(
                responseError.error.Errors[i].ErrorMessage,
                'Doğrulama Hatası'
              );
            }
          }
        }
      );
    } else {
      this.toastrService.error('Formunuz eksik', 'Dikkat');
    }
  }
}
