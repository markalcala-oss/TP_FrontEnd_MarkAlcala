import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productos',
  imports: [CommonModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class Productos {
  productos = [
    { id: 1, emoji: '💻', nombre: 'Laptop Pro 15"', categoria: 'Electrónica', precio: 12500, stock: 8 },
    { id: 2, emoji: '🖱️', nombre: 'Mouse Inalámbrico', categoria: 'Accesorios', precio: 350, stock: 45 },
    { id: 3, emoji: '⌨️', nombre: 'Teclado Mecánico', categoria: 'Accesorios', precio: 890, stock: 22 },
    { id: 4, emoji: '📱', nombre: 'Smartphone X12', categoria: 'Electrónica', precio: 8900, stock: 5 },
    { id: 5, emoji: '🎧', nombre: 'Auriculares BT', categoria: 'Audio', precio: 1200, stock: 30 },
    { id: 6, emoji: '🖥️', nombre: 'Monitor 24"', categoria: 'Electrónica', precio: 4500, stock: 12 },
  ];
}
