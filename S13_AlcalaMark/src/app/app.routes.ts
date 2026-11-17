import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Productos } from './pages/productos/productos';
import { Categorias } from './pages/categorias/categorias';
import { Inventario } from './pages/inventario/inventario';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: Inicio },
  { path: 'productos', component: Productos },
  { path: 'categorias', component: Categorias },
  { path: 'inventario', component: Inventario },
  { path: '**', component: NotFound },
];
