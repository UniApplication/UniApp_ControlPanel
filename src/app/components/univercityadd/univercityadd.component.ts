import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UnivercityDetailService } from 'src/app/services/univercity-detail.service';

@Component({
  selector: 'app-univercityadd',
  templateUrl: './univercityadd.component.html',
  styleUrls: ['./univercityadd.component.css']
})
export class UnivercityaddComponent implements OnInit {

  UnivercityAddForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private univercityDetailService:UnivercityDetailService) { }

  ngOnInit(): void {

    this.createUnivercityAddForm()
  }
  createUnivercityAddForm() {
    this.UnivercityAddForm = this.formBuilder.group({
      univercityName: ['', Validators.required],
      univercityDescription: ['', Validators.required],
      univercityRector: ['', Validators.required],
      starCount: ['', Validators.required],
      cityId: ['', Validators.required]
    });
  }
  add() {
    if (this. UnivercityAddForm.valid) {
      let univercity = Object.assign({}, this.UnivercityAddForm.value);
      this.univercityDetailService.getUnivercityAdd(univercity).subscribe(
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

