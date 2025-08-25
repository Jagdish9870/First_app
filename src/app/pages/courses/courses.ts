import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Strings } from '../../enum/strings.enum';

@Component({
  selector: 'app-courses',
  imports: [],
  templateUrl: './courses.html',
  styleUrl: './courses.scss'
})
export class Courses {

   @Input() isAdmin=false;
   @Output() del=new EventEmitter();
  courses: any[]=[];
   

   deleteCourse(course:any){
    this.del.emit(course);


   }
   getCourses(){
  const data=localStorage.getItem(Strings.STORAGE_KEY);
    if(data)
      {
        this.courses=JSON.parse(data);
      }

    }
    ngOnInit(){
      this.getCourses();
    }
  }

