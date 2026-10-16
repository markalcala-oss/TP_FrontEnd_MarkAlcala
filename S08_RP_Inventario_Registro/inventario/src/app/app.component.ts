import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Producto {
  nombre: string;
  sku: string;
  precio: number;
  stock: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false // <-- OBLIGATORIO para que Angular no lo considere standalone por defecto
})
export class AppComponent implements OnInit {
  miFormulario!: FormGroup;
  productos: Producto[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.miFormulario = this.fb.group({
      nombre: ['', [Validators.required]],
      sku: ['', [Validators.required, Validators.pattern(/^[A-Za-z]{3}\d{3}$/)]],
      precio: [null, [Validators.required, Validators.min(0.1)]],
      stock: [null, [Validators.required, Validators.min(1)]]
    });
  }

  guardar(): void {
    if (this.miFormulario.invalid) {
      return;
    }

    this.productos.push(this.miFormulario.value);
    this.miFormulario.reset();
  }

  eliminar(index: number): void {
    this.productos.splice(index, 1);
  }
}