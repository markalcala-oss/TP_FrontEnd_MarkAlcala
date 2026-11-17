import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inventario',
  imports: [CommonModule],
  templateUrl: './inventario.html',
  styleUrl: './inventario.css'
})
export class Inventario {
  inventario = [
    { id: 1, producto: 'Laptop Pro 15"', categoria: 'Electrónica', stock: 8, precio: 12500 },
    { id: 2, producto: 'Mouse Inalámbrico', categoria: 'Accesorios', stock: 45, precio: 350 },
    { id: 3, producto: 'Teclado Mecánico', categoria: 'Accesorios', stock: 22, precio: 890 },
    { id: 4, producto: 'Smartphone X12', categoria: 'Electrónica', stock: 5, precio: 8900 },
    { id: 5, producto: 'Auriculares BT', categoria: 'Audio', stock: 30, precio: 1200 },
    { id: 6, producto: 'Monitor 24"', categoria: 'Electrónica', stock: 0, precio: 4500 },
    { id: 7, producto: 'Webcam HD', categoria: 'Accesorios', stock: 18, precio: 750 },
    { id: 8, producto: 'Micrófono USB', categoria: 'Audio', stock: 7, precio: 950 },
  ];
}
