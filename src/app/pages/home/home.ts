import { Component  } from '@angular/core';
import { Courses } from '../courses/courses';
import { Strings } from '../../enum/strings.enum';
import { About } from "../about/about";

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
}
}