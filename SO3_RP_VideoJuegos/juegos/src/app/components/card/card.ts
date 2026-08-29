import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Juego } from '../../models/juego';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class CardComponent {
  @Input() juego!: Juego;
  @Output() onEliminar = new EventEmitter<number>();
  @Output() onEditar = new EventEmitter<Juego>();

  eliminar() {
    this.onEliminar.emit(this.juego.id);
  }

  editar() {
    this.onEditar.emit(this.juego);
  }
}