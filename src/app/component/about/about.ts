import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  private route=inject(ActivatedRoute);
  ngOnInit(){
    const id=this.route.snapshot.paramMap.get('id');
    console.log(id);
  }

}
