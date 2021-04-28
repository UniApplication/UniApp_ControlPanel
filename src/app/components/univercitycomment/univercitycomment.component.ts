import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommentModel } from 'src/app/models/commentModel';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-univercitycomment',
  templateUrl: './univercitycomment.component.html',
  styleUrls: ['./univercitycomment.component.css']
})
export class UnivercitycommentComponent implements OnInit {

  comments:CommentModel[];
  constructor(private commentService:CommentService,
    private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService) { }


  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      if(params["univercityId"]){
        this.getComments(params["univercityId"])
      }
    })
    }  
  
  getComments(univercityId:number){
    this.commentService.commentGetAll(univercityId).subscribe(response => {
      this.comments = response.data;
    })
  }
  deleteComment(comment:CommentModel){
    this.commentService.commentDelete(comment).subscribe(response => {
      this.toastrService.info(response.message);
      window.location.reload();
    })
  }

}
