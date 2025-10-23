<div align="center">
  <br />
  <h1>TaskFlow Frontend</h1>
  <p>
    Frontend profesional para la gestión de tareas, construido con Next.js, TypeScript y Tailwind CSS.
  </p>
</div>

<p align="center">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-15.x-black?style=for-the-badge&logo=next.js"/>
  <img alt="React" src="https://img.shields.io/badge/React-19.x-blue?style=for-the-badge&logo=react"/>
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript"/>
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=for-the-badge&logo=tailwind-css"/>
  <img alt="Zustand" src="https://img.shields.io/badge/Zustand-5.x-orange?style=for-the-badge"/>
  <img alt="TanStack Query" src="https://img.shields.io/badge/TanStack_Query-v5-FF4154?style=for-the-badge&logo=react-query"/>
</p>

---

## ✨ Características

- **Autenticación Completa**: Flujo de registro, inicio de sesión, cierre de sesión y recuperación de contraseña.
- **Rutas Protegidas**: Uso de Middleware de Next.js para proteger las páginas que requieren autenticación.
- **Gestión de Tareas (CRUD)**: Funcionalidad completa para crear, leer, actualizar y eliminar tareas.
- **Manejo de Estado Global**: Estado centralizado y simplificado con Zustand para la sesión de usuario y tareas.
- **Fetching de Datos Moderno**: Uso de TanStack Query (React Query) para un fetching, cacheo y sincronización de datos eficiente.
- **UI Moderna y Responsiva**: Componentes reutilizables construidos con Shadcn UI y estilizados con Tailwind CSS.
- **Formularios Validados**: Manejo de formularios robusto y con validaciones gracias a `react-hook-form`.

---

## 🛠️ Stack de Tecnologías

- **Framework**: [Next.js](https://nextjs.org/)
- **Librería UI**: [React](https://react.dev/)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Estilos CSS**: [Tailwind CSS](https://tailwindcss.com/)
- **Componentes UI**: [Shadcn UI](https://ui.shadcn.com/)
- **Manejo de Estado**: [Zustand](https://github.com/pmndrs/zustand)
- **Fetching de Datos**: [TanStack Query](https://tanstack.com/query/latest)
- **Manejo de Formularios**: [React Hook Form](https://react-hook-form.com/)

---

## 🚀 Cómo Empezar

Sigue estos pasos para tener una copia del proyecto funcionando localmente.

### Requisitos Previos

- [Node.js](https://nodejs.org/) (v20+ recomendado)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

### 1. Clona el Repositorio

```bash
git clone https://github.com/tu-usuario/taskflow-frontend.git
cd taskflow-frontend
```

### 2. Configura las Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto y añade la URL de tu API backend. Puedes usar el siguiente template:

```env
# URL del backend de TaskFlow API
NEXT_PUBLIC_API_URL=http://localhost:3001/api/v1
```

### 3. Instala las Dependencias

```bash
npm install
```

### 4. ¡Inicia la Aplicación!

```bash
# Inicia el servidor en modo de desarrollo (con Turbopack)
npm run dev
```

¡Listo! La aplicación estará disponible en `http://localhost:3000`.

---

## 📂 Estructura del Proyecto

El proyecto sigue la convención del `App Router` de Next.js, organizando el código de manera modular y escalable.

```
/app
├── (auth)/             # Rutas de autenticación (login, register, etc.)
├── (main)/             # Rutas principales y protegidas (tasks)
├── components/         # Componentes globales de la landing page
├── stores/             # Stores de Zustand para manejo de estado
├── layout.tsx          # Layout principal de la aplicación
└── page.tsx            # Página de inicio (landing page)

/components/ui/         # Componentes de UI de Shadcn (Button, Card, etc.)

/hooks/                 # Hooks personalizados (ej. para fetching de datos con TanStack Query)

/lib/                   # Librerías, utilidades y configuración (cliente de Query, etc.)
```

---

## ⚙️ Scripts Útiles

| Script          | Descripción                                      |
| :-------------- | :----------------------------------------------- |
| `npm run dev`   | Inicia la app en modo desarrollo con Turbopack.  |
| `npm run build` | Compila el proyecto para producción.             |
| `npm run start` | Inicia la app en modo producción (requiere `build`).|
| `npm run lint`  | Analiza el código con ESLint en busca de errores.|

---

## 📄 Licencia

Este proyecto es de código privado y no tiene una licencia de código abierto.

UNLICENSED