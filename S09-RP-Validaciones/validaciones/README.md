# 📦 Sistema de Registro de Productos - Angular Validaciones

**Estudiante:** Alcala Peralta, Mark Anderson  
**Tecnología:** Angular (Standalone Components + Reactive Forms)  

---

## 📋 Descripción del Proyecto

Aplicación web desarrollada en Angular para el registro y gestión de productos en inventario. La solución utiliza **Reactive Forms** (`FormBuilder` y `Validators`) para garantizar la integridad de los datos ingresados mediante validaciones en tiempo real y retroalimentación visual inmediata.

---

## 🛠️ Mejoras de Validación Implementadas

| Campo | Regla / Restricción | Implementación Angular |
| :--- | :--- | :--- |
| **Código SKU** | Patrón estricto `PROD-XXXX` (3 o 4 letras, un guion y 4 números). | `Validators.pattern(/^[A-Za-z]{3,4}-\d{4}$/)` |
| **Precio** | Valor estrictamente mayor a cero (`> 0`). | `Validators.min(0.01)` |
| **Stock** | Número entero no negativo (`>= 0`). | `Validators.min(0)` + `Validators.pattern(/^[0-9]+$/)` |

---

## 📁 Estructura del Código

```text
src/
└── app/
    ├── componentes/
    │   └── producto-registro/
    │       ├── producto-registro.ts       # Lógica del componente y validaciones
    │       ├── producto-registro.html     # Formulario dinámico y tabla de datos
    │       └── producto-registro.css      # Estilos visuales (tarjetas, banner y tabla)
    ├── app.ts                             # Componente raíz (App)
    ├── app.html                           # Renderizado de la vista principal
    └── main.ts                            # Bootstrap del proyecto Angular