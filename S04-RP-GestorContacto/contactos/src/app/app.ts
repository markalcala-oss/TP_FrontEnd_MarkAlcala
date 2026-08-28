import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Contacto {
  nombre: string;
  telefono: string;
  correo: string;
  tipo: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  titulo = 'Agenda de Contactos';

  // Objeto enlazado al formulario con [(ngModel)]
  nuevoContacto: Contacto = {
    nombre: '',
    telefono: '',
    correo: '',
    tipo: 'Personal'
  };

  // Lista dinama de contactos
  contactos: Contacto[] = [
    { nombre: 'Juan Pérez', telefono: '987654321', correo: 'juan@empresa.com', tipo: 'Trabajo' },
    { nombre: 'María López', telefono: '912345678', correo: 'maria@gmail.com', tipo: 'Personal' }
  ];

  // Agrega contacto a la lista y reinicia el formulario
  agregarContacto(): void {
    this.contactos.push({ ...this.nuevoContacto });
    this.nuevoContacto = { nombre: '', telefono: '', correo: '', tipo: 'Personal' };
  }
}