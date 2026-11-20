import { Routes } from '@angular/router';
import { authGuard, publicGuard } from './guards/auth.guard';
import { Login } from './pages/login/login';
import { Inicio } from './pages/inicio/inicio';
import { Productos } from './pages/productos/productos';
import { Categorias } from './pages/categorias/categorias';
import { Inventario } from './pages/inventario/inventario';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login, canActivate: [publicGuard] },
  { path: 'inicio', component: Inicio, canActivate: [authGuard] },
  { path: 'productos', component: Productos, canActivate: [authGuard] },
  { path: 'categorias', component: Categorias, canActivate: [authGuard] },
  { path: 'inventario', component: Inventario, canActivate: [authGuard] },
  { path: '**', component: NotFound },
];