import { Component, inject, OnInit } from '@angular/core';
import { PeliculaService } from '../../services/pelicula.service';
import { Pelicula } from '../../models/pelicula.model';

@Component({
  selector: 'app-pelicula-lista',
  standalone: true,
  imports: [],
  templateUrl: './pelicula-lista.component.html',
  styleUrl: './pelicula-lista.component.css'
})
export class PeliculaListaComponent implements OnInit {
  private peliculaService = inject(PeliculaService);
  peliculas: Pelicula[] = [];

  ngOnInit(): void {
    this.peliculas = this.peliculaService.obtenerPeliculas();
  }
}