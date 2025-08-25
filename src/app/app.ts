import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Header } from "./header/header";
import { Footer } from "./footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, RouterLink, Header, Footer],
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
