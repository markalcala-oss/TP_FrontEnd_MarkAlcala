import { Component } from '@angular/core';
import { ProductoRegistroComponent } from './componentes/producto-registro/producto-registro';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductoRegistroComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'validaciones';
}