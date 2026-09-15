import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Juego } from '../../models/juego';
import { CardComponent } from '../card/card';
import { FormularioComponent } from '../formulario/formulario';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule, CardComponent, FormularioComponent],
  templateUrl: './lista.html',
  styleUrl: './lista.css'
})
export class Lista {
juegos: Juego[] = [
  { id: 1, titulo: 'The Legend of Zelda', genero: 'Aventura', plataforma: 'Nintendo Switch', precio: 59.99, imagenUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=400' },
  { id: 2, titulo: 'Elden Ring', genero: 'RPG', plataforma: 'PC / PS5', precio: 49.99, imagenUrl: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=400' },
  { id: 3, titulo: 'God of War Ragnarök', genero: 'Acción', plataforma: 'PS5', precio: 69.99, imagenUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=400' },
  { id: 4, titulo: 'Minecraft', genero: 'Sandbox', plataforma: 'Multiplataforma', precio: 29.99, imagenUrl: 'https://images.unsplash.com/photo-1627856013091-fed6e4e30025?q=80&w=400' },
  { id: 5, titulo: 'Cyberpunk 2077', genero: 'RPG', plataforma: 'PC', precio: 39.99, imagenUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=400' }
];

  juegoSeleccionado: Juego | null = null;

  eliminarJuego(id: number) {
    this.juegos = this.juegos.filter(j => j.id !== id);
  }

  seleccionarParaEditar(juego: Juego) {
    this.juegoSeleccionado = juego;
  }

  guardarJuego(juego: Juego) {
    if (juego.id) {
      const index = this.juegos.findIndex(j => j.id === juego.id);
      if (index !== -1) this.juegos[index] = juego;
    } else {
      juego.id = new Date().getTime();
      this.juegos.push(juego);
    }
    this.juegoSeleccionado = null;
  }
}