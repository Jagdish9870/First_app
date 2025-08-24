import { Component, NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin',
  imports: [FormsModule],
  templateUrl: './admin.html',
  styleUrl: './admin.scss'
})
export class Admin {

  model :any={ };
  cover !: string;
  cover_file : any;
  showError=false;
  onSubmit(form: NgForm){
    if(form.invalid || !this.cover){
      form.control.markAllAsTouched();
      if(!this.cover){
        this.showError=true;
      }
      return;
    }

  }
  onFileSelected(event: any){
    const file=event.target.files[0];
    if(file){
      this.cover_file=file; 
      const reader = new FileReader();
    console.log(reader);
    reader.onload=()=>{
      const dataUrl= reader.result !.toString();
      this.cover =dataUrl;
      console.log('image : ',this.cover);
    };
    reader.readAsDataURL(file);
    this.showError=false;

    }
    
  }

}
