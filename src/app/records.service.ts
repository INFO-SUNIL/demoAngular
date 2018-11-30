import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Post } from './shared/post';

interface myObj{
  object:Object;
}


@Injectable({
  providedIn: 'root'
})


export class RecordsService {

  baseUrl: string = 'https://jsonplaceholder.typicode.com';



  constructor(private http: HttpClient) {
    console.log("service constructor");
   }
 data;
  returnData(){   
      //  return this.data=  this.http.get<myObj>('http://127.0.0.1:8080/file.json');
       this.data=  this.http.get<myObj>(this.baseUrl+'/posts');
    //  console.log(this.data);
      return this.data;
  }


  getPostId(id: number) {
   // console.log("getPostId", id);
    return this.http.get<Post>(this.baseUrl + '/posts/' + id);
  }



  getPost(userId) {
 //   console.log(userId);
    return this.http.get(this.baseUrl+'/posts/'+userId)
  }

  createPost(post: Post) {
    post.userId=1;
    //console.log(post);
    return this.http.post(this.baseUrl+'/posts', post);
  }

  updatePost(post: Post) {
    post.userId=1;    
    return this.http.put(this.baseUrl + '/posts/' + post.id, post);
  }

  deletePost(id: number) {
    return this.http.delete(this.baseUrl + '/posts/' + id);
  }


}
