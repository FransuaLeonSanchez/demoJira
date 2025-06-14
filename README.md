# 🎓 Plataforma de Desarrollo Adaptativo de Software - UNI

Plataforma académica web para el curso de Desarrollo Adaptativo de Software de la Universidad Nacional de Ingeniería (UNI). Un espacio digital para compartir conocimiento, fomentar la discusión académica y explorar las metodologías ágiles y adaptativas en el desarrollo de software.

## 📋 Descripción

Esta plataforma sirve como hub central para estudiantes, profesores e investigadores interesados en el desarrollo adaptativo de software. Proporciona un espacio para:
- 📚 Publicar y acceder a artículos académicos
- 💬 Participar en foros de discusión
- 🔬 Compartir investigaciones y casos de estudio
- 🤝 Colaborar con la comunidad académica

## ✨ Características Principales

### 🏠 Landing Page
- Diseño moderno y profesional con branding de la UNI
- Secciones informativas sobre la plataforma
- Navegación intuitiva y responsiva
- Vista previa del contenido reciente

### 💬 Sistema de Foros
- **Categorías especializadas:**
  - 🏃 Metodologías Ágiles (Scrum, Kanban, XP)
  - 🔧 DevOps y CI/CD
  - 🏗️ Arquitectura Adaptativa
  - 📚 Casos de Estudio
- **Funcionalidades avanzadas:**
  - Búsqueda en tiempo real
  - Filtrado por categorías
  - Ordenamiento (recientes, populares, más respuestas)
  - Indicadores de estado (fijado, resuelto)
  - Sistema de tags/etiquetas
  - Métricas de engagement

### 🎨 Diseño UI/UX
- Interfaz completamente responsiva
- Diseño accesible y moderno
- Transiciones suaves y animaciones
- Modo claro optimizado para lectura

## 🛠️ Tecnologías Utilizadas

- **Frontend Framework:** React 19.1.0 con TypeScript
- **Estilos:** Tailwind CSS v4.1.10
- **Enrutamiento:** React Router DOM v7.6.2
- **Build Tool:** Vite v6.3.5
- **Lenguaje:** TypeScript ~5.8.3
- **Linting:** ESLint con configuración para React

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js (v18.19.1 o superior recomendado)
- npm (v9.2.0 o superior)

### Pasos de instalación

1. **Clonar el repositorio**
```bash
git clone [URL_DEL_REPOSITORIO]
cd demoJira
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Iniciar el servidor de desarrollo**
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173/`

## 📁 Estructura del Proyecto

```
demoJira/
├── public/
│   ├── logo.avif          # Logo de la UNI
│   └── vite.svg           # Logo de Vite
├── src/
│   ├── components/
│   │   ├── Forums.tsx     # Componente de foros
│   │   └── Home.tsx       # Componente de página principal
│   ├── App.tsx            # Componente principal con enrutamiento
│   ├── main.tsx           # Punto de entrada
│   └── index.css          # Estilos globales con Tailwind
├── index.html             # HTML principal
├── package.json           # Dependencias y scripts
├── tailwind.config.js     # Configuración de Tailwind (eliminado en v4)
├── postcss.config.js      # Configuración de PostCSS
├── vite.config.ts         # Configuración de Vite
└── tsconfig.json          # Configuración de TypeScript
```

## 📄 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Vista previa de la build de producción
- `npm run lint` - Ejecuta el linter para verificar el código

## 🌐 Páginas y Rutas

- `/` - Página principal con información general del curso
- `/foros` - Sistema de foros de discusión

## 🎯 Próximas Características

- [ ] Sistema de autenticación para estudiantes
- [ ] Publicación y gestión de artículos
- [ ] Sección de recursos descargables
- [ ] Sistema de notificaciones
- [ ] Perfil de usuario
- [ ] Sistema de mensajería
- [ ] Calendario de eventos académicos
- [ ] Integración con plataformas de la UNI

## 👥 Contribución

Este es un proyecto académico para el curso de Desarrollo Adaptativo de Software de la UNI. Las contribuciones son bienvenidas siguiendo las guías de estilo del proyecto y los principios SOLID.

## 📧 Contacto

- **Email:** desarrollo.adaptativo@uni.edu.pe
- **Teléfono:** +51 1 481-1070
- **Dirección:** Av. Túpac Amaru 210, Lima 25, Perú

## 📄 Licencia

Proyecto académico de la Universidad Nacional de Ingeniería. Todos los derechos reservados © 2024.

---

Desarrollado con ❤️ para la comunidad académica de la UNI
