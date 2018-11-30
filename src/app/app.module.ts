import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { RecordsService } from './records.service';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { PostsComponent } from './posts/posts.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { AboutComponent } from './about/about.component';
import { PostDetailsComponent } from './posts/post-details/post-details.component';
import { UpdatePostComponent } from './posts/update-post/update-post.component'
import { PagerServiceService } from './pager-service.service';
import {MaterialModule} from './material';
import { FooterComponent } from './shared/footer/footer.component';
import { CustomerComponent } from './customers/customers.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    PostsComponent,
    PostListComponent,
    AboutComponent,
    PostDetailsComponent,
    UpdatePostComponent,
    FooterComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule    
  ],
  providers: [RecordsService,
    PagerServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
