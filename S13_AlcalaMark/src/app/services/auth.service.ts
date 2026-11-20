import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly STORAGE_KEY = 'alcalamark_session';

  // Credenciales válidas para fines educativos
  private readonly VALID_EMAIL = 'admin@alcalamark.com';
  private readonly VALID_PASSWORD = '123456';

  // Estado reactivo de autenticación (persiste al recargar F5)
  isAuthenticated = signal<boolean>(this.hasActiveSession());

  constructor(private router: Router) {}

  private hasActiveSession(): boolean {
    if (typeof localStorage === 'undefined') return false;
    return localStorage.getItem(this.STORAGE_KEY) !== null;
  }

  login(email: string, password: string): boolean {
    if (email.trim() === this.VALID_EMAIL && password === this.VALID_PASSWORD) {
      const sessionData = {
        email: email.trim(),
        rol: 'Administrador',
        fecha: new Date().toISOString(),
      };
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(sessionData));
      this.isAuthenticated.set(true);
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem(this.STORAGE_KEY);
    this.isAuthenticated.set(false);
    this.router.navigate(['/login']);
  }

  getUserEmail(): string {
    const raw = localStorage.getItem(this.STORAGE_KEY);
    return raw ? JSON.parse(raw).email : '';
  }
}