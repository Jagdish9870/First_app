import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('First_app');
  property_binding=" designer is jack"

  ngOnInit(){
   // this.changeProperty();
  }

  changeProperty(){
    this.property_binding=" creater is jack"
  }
}
