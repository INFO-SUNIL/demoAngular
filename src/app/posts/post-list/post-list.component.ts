import { Component, OnInit } from '@angular/core';
import { RecordsService } from 'src/app/records.service';
import { Post } from 'src/app/shared/post';
import { Router } from '@angular/router';
import { PagerServiceService } from 'src/app/pager-service.service';
import * as _ from 'underscore';
@Component({
  selector: 'app-post-list',
  
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
   tempRecord= [];
   private allItems: any[];

    // pager object
    pager: any = {};

    // paged items
    pagedItems: any[];


  
  constructor(private serviceData: RecordsService,private router: Router, private pagerService: PagerServiceService) {
  }
  ngOnInit() {      
    this.serviceData.returnData().subscribe(data=>{
    this.allItems= data   
    // console.log(this.tempRecord);
    this.setPage(1);
    });
  }


  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
        return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page);

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
}



  editPost(post: Post): void {
    localStorage.removeItem("editPostId");
    //console.log(post.id);
    localStorage.setItem("editPostId", post.id.toString());
    this.router.navigate(['updatepost']);
  };

  deletePost(post: Post): void {
    this.serviceData.deletePost(post.id)
      .subscribe( data => {
        this.tempRecord = this.tempRecord.filter(u => u !== post);
      })
  };

  addPost(): void {
    this.router.navigate(['addpost']);
  };

}
