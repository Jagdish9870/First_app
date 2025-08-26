import { Component, EventEmitter, inject, input, Input, Output, signal } from '@angular/core';
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

  constructor(){
//     effect(()=> {
//       const courses=this.courseService.coursesSignal();

//       if(courses !== this.courses()){
//  this.courses.set(courses);
//       }
     
      
//     },{allowSignalWrites: true})
  }
  //  isAdmin=input(false,{
  //   // alias: 'isAdm'
  //  });
   isAdmin=input<boolean>(false);
  // courses: Course[]=[];
  // courses= signal<Course[]>([]);

  // coursesSub!: Subscription;
   
 courseService=inject(CourseService);
//  courses=computed(()=> this.courseService.coursesSignal());
//  private sanitizer =inject(DomSanitizer);
//  sanitizerUrl(value: string){
//   return this.sanitizer.sanitize(SecurityContext.URL, value) || null

//  }
   deleteCourse(course:any){
    this.courseService.deleteCourse(course);


   }
   
    ngOnInit(){
      // this.courses=this.courseService.getCourses();

      //  this.courses.set(this.courseService.getCourses());
      // this.coursesSub=this.courseService.courses.subscribe({
      //   next:(courses)=>{
      //     this.courses.set(courses);
      //   },error:(e)=>{
      //     console.log(e);
      //   }
      // });
    }

    ngOnDestroy(){
      // if(this.coursesSub){
      //   // this.coursesSub.unsubscribe();
      // }
    }
  }