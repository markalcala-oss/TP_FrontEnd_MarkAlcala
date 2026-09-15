import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Lista } from './components/lista/lista';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, Lista],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'juegos';
}