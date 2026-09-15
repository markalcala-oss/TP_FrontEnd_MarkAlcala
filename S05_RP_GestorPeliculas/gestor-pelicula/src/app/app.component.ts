import { Component } from '@angular/core';
import { PeliculaListaComponent } from './components/pelicula-lista/pelicula-lista.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PeliculaListaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}