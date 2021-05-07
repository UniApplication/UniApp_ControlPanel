import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Univercity } from 'src/app/models/univercity';
import { UnivercityImageModel } from 'src/app/models/univercityImageModel';
import { UnivercityDetailService } from 'src/app/services/univercity-detail.service';

@Component({
  selector: 'app-univercitylist-update',
  templateUrl: './univercitylist-update.component.html',
  styleUrls: ['./univercitylist-update.component.css']
})
export class UnivercitylistUpdateComponent implements OnInit {

  UnivercityUpdateForm: FormGroup;
  univercity:Univercity;
  univercityImage:UnivercityImageModel;
  UnivercityImageAddForm : FormGroup;
  imageDataToUpload : any;
  selectedFile:File=null;

  constructor(private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private univercityDetailService:UnivercityDetailService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(params => {
      if(params["univercityId"]){
        this.getOnlyUnivercity(params["univercityId"]);
        this.getUnivercityImage(params["univercityId"]);
        this.createImageAddForm()
      
      }  
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file.size > 10 * Math.pow(1024, 2)) {
      this.toastrService.error(
        `Sectiginiz dosya 10MB'tan daha buyuk olamaz: ${(
          Math.round((file.size / Math.pow(1024, 2)) * 100) / 100
        ).toFixed(2)}MB`,
        'Hata'
      );
    } else {
      this.imageDataToUpload = file;
    }
  }
  addImage(): void {
    if (this.UnivercityImageAddForm.valid) {
      const formData: FormData = new FormData();
      formData.append('Image', this.imageDataToUpload);
      formData.append('univercityId',this.univercityImage.univercityId.toString());
      this.univercityDetailService.addImage(formData).subscribe(
        () => {
          this.toastrService.success('Gorsel eklendi', 'Basarili');
          
        },
        (responseError) => {
          if (responseError.error.Errors.length > 0) {
            for (let i = 0; i < responseError.error.Errors.length; i++) {
              this.toastrService.error(
                responseError.error.Errors[i].ErrorMessage,
                'Doğrulama hatası'
              );
            }
          }
        }
      );
    } else {
      this.toastrService.error('Formunuz eksik', 'Dikkat');
    }
  }
  createImageAddForm():void{
    this.UnivercityImageAddForm = this.formBuilder.group({
      Image : ["",Validators.required],
    });
  }
  
  createUnivercityUpdateForm() {
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
      this.createUnivercityUpdateForm()
    })
  }
  getUnivercityImage(univercityId:Number){
    this.univercityDetailService.getUnivercityImage(univercityId).subscribe(response => {
      this.univercityImage = response.data;
      
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
