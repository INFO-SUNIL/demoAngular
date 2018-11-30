import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { AboutComponent } from './about/about.component';
import { PostDetailsComponent } from './posts/post-details/post-details.component';
import { PostsComponent } from './posts/posts.component';
import { UpdatePostComponent } from './posts/update-post/update-post.component';
import { CustomerComponent } from './customers/customers.component';

const routes: Routes = [
  {path :'', component:HomeComponent},
  {path :'about', component:AboutComponent},
  {path :'postlist', component:PostListComponent},  
  {path :'customer', component:CustomerComponent},  
  {
    path: 'postdetails/:id',    component: PostDetailsComponent ,
    children:[
    {path :'postlist1', component: PostListComponent}
  ]},
  {path:'addpost', component:PostsComponent},
  {    path:'updatepost', component:UpdatePostComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
