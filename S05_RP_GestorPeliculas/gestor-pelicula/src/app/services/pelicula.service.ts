import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula.model';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  // Arreglo local con datos de prueba
  private peliculas: Pelicula[] = [
    { titulo: 'Interstellar', genero: 'Ciencia Ficción', anio: 2014, calificacion: 9.5 },
    { titulo: 'El Padrino', genero: 'Drama', anio: 1972, calificacion: 9.2 },
    { titulo: 'The Dark Knight', genero: 'Acción', anio: 2008, calificacion: 8.8 },
    { titulo: 'Película Promedio', genero: 'Comedia', anio: 2021, calificacion: 5.5 }
  ];

  // Método requerido en la tarea
  obtenerPeliculas(): Pelicula[] {
    return this.peliculas;
  }
}