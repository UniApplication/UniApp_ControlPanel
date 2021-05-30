import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PostDetail } from 'src/app/models/postDetail';
import { PostModel } from 'src/app/models/postModel';
import { PostService } from 'src/app/services/post.service';
@Component({
  selector: 'app-postmain',
  templateUrl: './postmain.component.html',
  styleUrls: ['./postmain.component.css']
})
export class PostmainComponent implements OnInit {

  PostAddForm: FormGroup;
  posts:PostDetail[];
  user:any=localStorage.getItem("userId")
  constructor( private formBuilder: FormBuilder,
    private toastrService: ToastrService,private postService:PostService) { }

  ngOnInit(): void {
    this.createPostAddForm();
    this.getPosts();
  }
  createPostAddForm() {
    this.PostAddForm = this.formBuilder.group({
      uniId: [parseInt(this.user)],
      uniPost: ['', Validators.required],
    });
}
postAdd(){
    if (this. PostAddForm.valid) {
      let post = Object.assign({}, this.PostAddForm.value);
      this.postService.postAdd(post).subscribe(
        response => {
          this.toastrService.success(response.message, 'Başarılı');
          window.location.reload();
        },
        responseError => {
          this.toastrService.error(
            "Yetkiniz Bulunmamaktadır",
            'Hata'
          );
        }
      );
    } else {
      this.toastrService.error('Formunuz eksik', 'Dikkat');
    }
  
}

postDelete(post:PostDetail){
    this.postService.postDelete(post).subscribe(response=>{
      this.toastrService.info(response.message)
      window.location.reload();
    },responseError=>{
      this.toastrService.error("Yetki Reddedildi")
    })
  
}
getPosts(){
  this.postService.postGetAll().subscribe(response => {
    this.posts = response.data;
  })
}
}
