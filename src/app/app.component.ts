import { Component } from '@angular/core';
import { RecordsService } from './records.service';

// function log(target , name , descriptor){
//   console.log(target , name , descriptor)

//   const original = descriptor.value
// original()
//   // descriptor.value= function () {
//   //   console.log("discriptor is hacked");
//   // }
//    return descriptor; 
// }


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  Name="default";
  tempRecord= [];
  
  constructor(private serviceData: RecordsService) {
    }

    ngOnInit(){
     
       this.serviceData.returnData().subscribe(data=>{
                     this.tempRecord= data   
            });

            //console.log("da", this.tempRecord);
    }
  
  
}
