import { Component, OnInit } from '@angular/core';
import { RecordsService } from 'src/app/records.service';
import { ActivatedRoute,  Router } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  postDetails : Object;
  constructor(private service: RecordsService,private route: ActivatedRoute,
     private navtigate :Router) { 
    this.route.params.subscribe( params => this.postDetails = params.id );
  }

  ngOnInit() {
    this.service.getPost(this.postDetails).subscribe(data=>{
      this.postDetails=data
    })
  }

  onClick(){
    this.navtigate.navigate(['postlist1'])
  }

}
