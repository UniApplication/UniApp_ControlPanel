import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClaimModel } from 'src/app/models/claimModel';
import { UserModel } from 'src/app/models/userModel';
import { UserOperationModel } from 'src/app/models/userOperationClaim';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css'],
})
export class UserUpdateComponent implements OnInit {
  ClaimUpdateForm: FormGroup;
  userclaims: ClaimModel[];
  claims: ClaimModel[];
  currentClaim: ClaimModel;

  userOperationClaim: UserOperationModel;
  currentUserId:number;
  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['userId']) {
        this.getOnlyClaims(params['userId']);
        this.currentUserId=parseInt(params['userId']);
      }
      this.getAllClaims();
    });
  }
  getOnlyClaims(userId: number) {
    this.userService.getClaims(userId).subscribe((response) => {
      this.userclaims = response.data;
    });
  }
  getAllClaims() {
    this.userService.getAllClaims().subscribe((response) => {
      this.claims = response.data;
    });
  }
  getCurrentClaim(claim: ClaimModel) {
    if (claim == this.currentClaim) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }
  setCurrentClaim(claim: ClaimModel) {
    this.currentClaim = claim;
    this.createClaimUpdateForm();
  }
  createClaimUpdateForm() {
    this.ClaimUpdateForm = this.formBuilder.group({
      userId: [this.currentUserId],
      operationClaimId: [this.currentClaim.id],
    });
  }
  userClaimUpdate() {
    if (this.ClaimUpdateForm.valid) {
      let userClaim = Object.assign({}, this.ClaimUpdateForm.value);
      this.userService.updateClaim(userClaim).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Başarılı');
          window.location.reload();
        },
        (responseError) => {
          console.log(responseError.error)
          this.toastrService.error(
            responseError.error,
            'Hata'
          );
        }
      );
    } else {
      this.toastrService.error('Formunuz eksik', 'Dikkat');
    }
  }
}
