import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categorias',
  imports: [CommonModule],
  templateUrl: './categorias.html',
  styleUrl: './categorias.css'
})
export class Categorias {
  categorias = [
    { id: 1, emoji: '💻', nombre: 'Electrónica', total: 42, estado: 'Activa' },
    { id: 2, emoji: '🎧', nombre: 'Audio', total: 18, estado: 'Activa' },
    { id: 3, emoji: '🖱️', nombre: 'Accesorios', total: 35, estado: 'Activa' },
    { id: 4, emoji: '📷', nombre: 'Fotografía', total: 10, estado: 'Activa' },
    { id: 5, emoji: '🎮', nombre: 'Gaming', total: 27, estado: 'Activa' },
    { id: 6, emoji: '🔋', nombre: 'Energía', total: 16, estado: 'Inactiva' },
  ];
}
