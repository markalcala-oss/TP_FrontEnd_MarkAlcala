import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Libro } from './libro.model';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  private http = inject(HttpClient);

  // Endpoint GET asignado por la profesora
  private openLibraryUrl = 'https://openlibrary.org/search.json?q=don+quijote';
  
  // Endpoint público de prueba para simular el POST (ya que OpenLibrary es de solo lectura)
  private mockPostUrl = 'https://jsonplaceholder.typicode.com/posts';

  // GET - Consultar libros y adaptar la respuesta al modelo Libro
  getLibros(): Observable<Libro[]> {
    return this.http.get<any>(this.openLibraryUrl).pipe(
      map(response => {
        // Tomamos los primeros 10 resultados y mapeamos los campos
        return response.docs.slice(0, 10).map((doc: any) => ({
          titulo: doc.title || 'Sin título',
          autor: doc.author_name ? doc.author_name[0] : 'Autor desconocido',
          anio: doc.first_publish_year || 0,
          genero: doc.subject ? doc.subject[0] : 'Clásico / Ficción'
        }));
      })
    );
  }

  // POST - Enviar datos de registro a la API simulada
  registrarLibro(libro: Libro): Observable<any> {
    return this.http.post(this.mockPostUrl, libro);
  }
}