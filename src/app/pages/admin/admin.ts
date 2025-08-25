import { Component, NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Courses } from '../courses/courses';
import { Strings } from '../../enum/strings.enum';

@Component({
  selector: 'app-admin',
  imports: [FormsModule,Courses],
  templateUrl: './admin.html',
  styleUrl: './admin.scss'
})
export class Admin {

  model :any={ };
  cover !: string | null ;
  cover_file : any;
  showError=false;
  courses: any[]=[];
  onSubmit(form: NgForm){
    if(form.invalid || !this.cover){
      form.control.markAllAsTouched();
      if(!this.cover){
        this.showError=true;
      }
      return;
    }
   
    this.saveCourse(form);

  }
  clearForm(form:NgForm){
     form.reset();
    this.cover=null;
    this.cover_file=null;
  }
  onFileSelected(event: any){
    const file=event.target.files[0];
    if(file){
      this.cover_file=file; 
      const reader = new FileReader();
    console.log(reader);
    reader.onload=()=>{
      const dataUrl= reader.result!.toString();
      this.cover =dataUrl;
      console.log('image : ',this.cover);
    };
    reader.readAsDataURL(file);
    this.showError=false;

    }
    
    
  }
  saveCourse(form: NgForm){
    const formValue=form.value;
    const data={
      ...formValue,
      image: this.cover,
      id: this.courses.length + 1,
    };
    this.courses=[...this.courses,data];
    this.setItem(this.courses);
    this.clearForm(form);
  }



  ngOnInit(){
    
    

  }
  deleteCourse(course: any){
   this.courses= this.courses.filter(course_item=> course_item.id != course.id);
   this.setItem(this.courses);
  }
  setItem(data:any){

    localStorage.setItem(Strings.STORAGE_KEY, JSON.stringify(data));

  }

}
