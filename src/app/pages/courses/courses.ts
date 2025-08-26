import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { CourseService } from '../../services/course/course.service';
import { Course } from '../../interfaces/course';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-courses',
  imports: [],
  templateUrl: './courses.html',
  styleUrl: './courses.scss'
})
export class Courses {

  @Input() isAdmin=false;
  // courses: Course[]=[];
  courses= signal<Course[]>([]);

  coursesSub!: Subscription;
   
 private courseService=inject(CourseService);
   deleteCourse(course:any){
    this.courseService.deleteCourse(course);


   }
   
    ngOnInit(){
      // this.courses=this.courseService.getCourses();

       this.courses.set(this.courseService.getCourses());
      this.coursesSub=this.courseService.courses.subscribe({
        next:(courses)=>{
          this.courses.set(courses);
        },error:(e)=>{
          console.log(e);
        }
      });
    }

    ngOnDestroy(){
      if(this.coursesSub){
        this.coursesSub.unsubscribe();
      }
    }
  }