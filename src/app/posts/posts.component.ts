import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {
  messageForm: FormGroup;
  submitted=false;
  success =false;


  constructor( private formBuilder: FormBuilder, private service: RecordsService) { }

  ngOnInit() {

     this.messageForm= this.formBuilder.group({
       title: ['', Validators.required],
       body: ['', Validators.required]
     });
  }

  onSubmit(){
   // console.log(this.messageForm.value);
    this.submitted=true;
    if (this.messageForm.invalid) {
      return;
  }


  this.service.createPost(this.messageForm.value).subscribe(data=>{

  });
  this.success = true;
  }
}
