import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Juego } from '../../models/juego';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css'
})
export class FormularioComponent implements OnChanges {
  @Input() juegoAEditar: Juego | null = null;
  @Output() onGuardar = new EventEmitter<Juego>();

  juego: Juego = this.getJuegoVacio();

  ngOnChanges() {
    if (this.juegoAEditar) {
      this.juego = { ...this.juegoAEditar };
    } else {
      this.juego = this.getJuegoVacio();
    }
  }

  guardar() {
    if (!this.juego.titulo || !this.juego.precio) return;
    this.onGuardar.emit(this.juego);
    this.juego = this.getJuegoVacio();
  }

  private getJuegoVacio(): Juego {
    return { id: 0, titulo: '', genero: '', plataforma: '', precio: 0, imagenUrl: '' };
  }
}