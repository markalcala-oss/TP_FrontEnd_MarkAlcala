import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Producto {
  sku: string;
  precio: number;
  stock: number;
}

@Component({
  selector: 'app-producto-registro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './producto-registro.html',
  styleUrl: './producto-registro.css'
})
export class ProductoRegistroComponent implements OnInit {
  productoForm!: FormGroup;
  productos: Producto[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.productoForm = this.fb.group({
      sku: ['', [Validators.required, Validators.pattern(/^[A-Za-z]{3,4}-\d{4}$/)]],
      precio: [null, [Validators.required, Validators.min(0.01)]],
      stock: [null, [Validators.required, Validators.min(0), Validators.pattern(/^[0-9]+$/)]]
    });
  }

  guardarProducto(): void {
    if (this.productoForm.invalid) {
      this.productoForm.markAllAsTouched();
      return;
    }

    this.productos.push(this.productoForm.value);
    this.productoForm.reset();
  }

  // 🔴 FUNCIÓN DE ELIMINACIÓN
  eliminarProducto(index: number): void {
    this.productos.splice(index, 1);
  }
}