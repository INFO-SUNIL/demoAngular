import { Component, OnInit } from '@angular/core';
import { RecordsService } from 'src/app/records.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from 'src/app/shared/post';
import {first} from "rxjs/operators";
@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.scss']
})
export class UpdatePostComponent implements OnInit {
  post:Post;
  editPost: FormGroup;

  constructor(private service: RecordsService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {

    let userId = localStorage.getItem("editPostId");
    
    if(!userId) {
      alert("Invalid action.")
      this.router.navigate(['postlist']);
      return;
    }


    this.editPost = this.formBuilder.group({     
      id:[],
      userId:[],
      title: ['', Validators.required],
      body: ['', Validators.required]      
    });


    this.service.getPostId(+ userId )     .subscribe( data => {
      this.editPost.setValue(data);
    });
  }

  onSubmit() {
    this.service.updatePost(this.editPost.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['postlist']);
        },
        error => {
          alert(error);
        });
  }



}
