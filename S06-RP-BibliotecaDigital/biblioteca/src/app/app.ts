import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LibroService } from './libro.service';
import { Libro } from './libro.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private libroService = inject(LibroService);

  libros: Libro[] = [];

  nuevoLibro: Libro = {
    titulo: '',
    autor: '',
    anio: new Date().getFullYear(),
    genero: ''
  };

  ngOnInit(): void {
    this.cargarLibros();
  }

  // GET: Cargar listado
  cargarLibros(): void {
    this.libroService.getLibros().subscribe({
      next: (data) => {
        this.libros = data;
      },
      error: (err) => console.error('Error al obtener libros:', err)
    });
  }

  // POST: Registrar libro
  guardar(): void {
    if (!this.nuevoLibro.titulo || !this.nuevoLibro.autor) {
      alert('Por favor completa al menos el título y el autor');
      return;
    }

    this.libroService.registrarLibro(this.nuevoLibro).subscribe({
      next: (respuesta) => {
        alert('¡Libro registrado exitosamente en la API!');
        this.libros.unshift({ ...this.nuevoLibro });
        this.limpiarFormulario();
      },
      error: (err) => console.error('Error al registrar libro:', err)
    });
  }

  limpiarFormulario(): void {
    this.nuevoLibro = {
      titulo: '',
      autor: '',
      anio: new Date().getFullYear(),
      genero: ''
    };
  }
}