# S10 | M11: Sistema de Registro e Inventario de Productos

Este proyecto es una solución práctica desarrollada en **Angular** que implementa **Formularios Reactivos (`ReactiveFormsModule`)** para la gestión e inventario de productos en tiempo real, incluyendo validaciones personalizadas y reactividad directa en la interfaz.

---

## 🚀 Requisitos Previos

Asegúrate de tener instalados los siguientes componentes en tu sistema:

* [Node.js](https://nodejs.org/) (versión LTS recomendada)
* [Angular CLI](https://angular.dev/tools/cli) (versión 17+)

---

## 📦 Instrucciones de Arranque e Instalación

Sigue estos pasos para ejecutar el proyecto localmente:

### 1. Instalar dependencias
Abre la terminal en la raíz del proyecto y ejecuta el siguiente comando para instalar todos los paquetes necesarios:

```bash
npm install
```

### 2. Iniciar el servidor de desarrollo
Una vez finalizada la instalación, ejecuta el servidor local de Angular:

```bash
ng serve
```

O si deseas que abra automáticamente tu navegador predeterminado:

```bash
ng serve -o
```

### 3. Abrir la aplicación
Navega a la siguiente dirección en tu navegador web:

```text
http://localhost:4200/
```

---

## ✨ Funcionalidades y Validaciones Implementadas

* **Nombre del Producto:** Campo obligatorio.
* **SKU / Código:** Requiere obligatoriamente la expresión regular / patrón de 3 letras seguidas de 3 números (Ej: `ABC123`).
* **Precio Unitario ($):** Requiere un valor numérico estrictamente mayor a 0 (mínimo `0.1`).
* **Stock Inicial:** Requiere un entero positivo igual o mayor a `1`.
* **Deshabilitación Dinámica del Botón:** El botón de registro se mantiene deshabilitado mientras el formulario no cumpla con todas las validaciones.
* **Cálculo en Tiempo Real:** Renderizado inmediato en la tabla con cálculo automático de costo total (`Precio * Stock`).
* **Eliminación Dinámica:** Permite remover registros del inventario en memoria.

---

## 👤 Autor

* **Estudiante:** Mark Anderson Alcala Peralta (ESTUDIANTE 02)
* **Curso/Módulo:** Formación Frontend - Angular Reactive Forms