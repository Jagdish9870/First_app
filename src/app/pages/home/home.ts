import { Component, inject  } from '@angular/core';
import { Courses } from '../courses/courses';
import { Strings } from '../../enum/strings.enum';
import { About } from "../about/about";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  imports: [Courses, About],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  // private router=inject(Router);

  // navigate(){
  //   this.router.navigate(['/about'])
  // }

  courses: any[]=[];
//   getCourses(){
//     const data=localStorage.getItem(Strings.STORAGE_KEY);
//       if(data)
//         {
//           this.courses=JSON.parse(data);
//         }
  
  
// }
ngOnInit(){
  // this.getCourses();
  this.fetchHttpData();
}
private http=inject(HttpClient)
fetchHttpData(){
this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe({
  next: (posts)=>{
    console.log(posts)
    
  }
});
}
}