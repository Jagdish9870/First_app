import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Header } from "./main-app/header/header";
import { Footer } from "./main-app/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('First_app');
  
   
}
