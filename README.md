# 🎓 Plataforma de Desarrollo Adaptativo de Software - UNI

Plataforma académica web para el curso de Desarrollo Adaptativo de Software de la Universidad Nacional de Ingeniería (UNI). Un espacio digital para compartir conocimiento, fomentar la discusión académica y explorar las metodologías ágiles y adaptativas en el desarrollo de software.

[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/FransuaLeonSanchez/demoJira)
[![Jira](https://img.shields.io/badge/Jira-Integrated-green)](https://atlassian.com/software/jira)
[![React](https://img.shields.io/badge/React-19.1.0-61dafb)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.10-38b2ac)](https://tailwindcss.com/)

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

### 📚 Sistema de Artículos
- **Exploración de contenido académico:**
  - Artículos destacados en la página principal
  - Filtrado por categorías (Metodologías, Arquitectura, DevOps, Casos)
  - Búsqueda de artículos por título, autor o tags
  - Información detallada de autores
  - Tags populares y autores destacados
  - Tiempo estimado de lectura

### 🔬 Sección de Investigación
- **Gestión de proyectos de investigación:**
  - Estados de proyecto (En progreso, Completado, Publicado)
  - Indicadores visuales de progreso
  - Información de financiamiento
  - Equipo de investigación
  - Objetivos y metodología detallada
  - Filtros por estado y área
  - Estadísticas generales

### 📞 Página de Contacto
- **Comunicación integral:**
  - Formulario de contacto categorizado
  - Información de ubicación con mapa integrado
  - Datos del equipo docente
  - Horarios de atención
  - Preguntas frecuentes (FAQ)
  - Enlaces a redes sociales
  - Múltiples canales de contacto

### 🎨 Diseño UI/UX
- Interfaz completamente responsiva
- Diseño accesible y moderno
- Transiciones suaves y animaciones
- Modo claro optimizado para lectura
- Navegación intuitiva con indicadores de página activa

## 🛠️ Tecnologías Utilizadas

- **Frontend Framework:** React 19.1.0 con TypeScript
- **Estilos:** Tailwind CSS v4.1.10
- **Enrutamiento:** React Router DOM v7.6.2
- **Build Tool:** Vite v6.3.5
- **Lenguaje:** TypeScript ~5.8.3
- **Linting:** ESLint con configuración para React
- **Control de Versiones:** Git + GitHub
- **Gestión de Proyectos:** Jira (integrado)

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js (v18.19.1 o superior recomendado)
- npm (v9.2.0 o superior)

### Pasos de instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/FransuaLeonSanchez/demoJira.git
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

### Configuración para Desarrollo con Jira

Para trabajar con la integración de Jira:

1. **Crear una nueva rama siguiendo la convención:**
```bash
git checkout -b SCRUM-[número]-descripcion-feature
```

2. **Hacer commits con la clave del work item:**
```bash
git commit -m "SCRUM-[número]: Descripción del cambio"
```

3. **Push y crear Pull Request:**
```bash
git push -u origin SCRUM-[número]-descripcion-feature
```

## 📁 Estructura del Proyecto

```
demoJira/
├── public/
│   ├── logo.avif          # Logo de la UNI
│   └── vite.svg           # Logo de Vite
├── src/
│   ├── components/
│   │   ├── Home.tsx       # Componente de página principal
│   │   ├── Articles.tsx   # Componente de artículos académicos
│   │   ├── Forums.tsx     # Componente de foros de discusión
│   │   ├── Research.tsx   # Componente de proyectos de investigación
│   │   └── Contact.tsx    # Componente de contacto e información
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
- `/articulos` - Artículos académicos y publicaciones
- `/foros` - Sistema de foros de discusión
- `/investigacion` - Proyectos de investigación activos y completados
- `/contacto` - Información de contacto y formulario de consultas

## 🏗️ Arquitectura del Sistema

### Arquitectura Básica
La plataforma sigue una arquitectura simple y escalable:

```
┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│   Frontend  │     │   Backend    │     │  Database   │
│   React     │────▶│   API REST   │────▶│ PostgreSQL  │
│   (Vite)    │     │   (Node.js)  │     │             │
└─────────────┘     └──────────────┘     └─────────────┘
       │                    │                     
       │                    ▼                     
       │            ┌──────────────┐             
       └───────────▶│   Services   │             
                    │ Auth | Email │             
                    └──────────────┘             
```

### Flujo de Datos Principal
1. **Autenticación:** Usuario → Frontend → API → Base de Datos → JWT Token
2. **Visualización:** Usuario → Frontend → API → Consulta DB → Renderizado
3. **Creación de Contenido:** Usuario → Frontend → API → Guardar en DB → Confirmación
4. **Búsqueda:** Usuario → Frontend → API → Búsqueda en DB → Resultados

### Estructura de Componentes React
- **Páginas Principales:** Home, Articles, Forums, Research, Contact
- **Componentes Compartidos:** Navigation, Search, Footer
- **Funcionalidades:** Login/Register, Filters, Comments
- **Estado:** React Context + Local Storage

## 🔗 Integración con Jira

Este proyecto está integrado con Jira para la gestión de tareas y seguimiento del desarrollo.

### Flujo de Trabajo con Jira
1. **Crear rama con formato:** `git checkout -b SCRUM-X-descripcion-feature`
2. **Hacer commits incluyendo la clave:** `git commit -m "SCRUM-X: Descripción del cambio"`
3. **Crear Pull Request con SCRUM-X en el título**
4. **Vinculación automática:** Los work items (SCRUM-4 a SCRUM-19) se actualizan automáticamente

### Work Items Actuales
- **SCRUM-4:** Fix author names in Articles component ✅
- **SCRUM-5:** Improve Home hero section ✅
- **SCRUM-6:** Enhance Forums search placeholder ✅
- **SCRUM-7:** Update Research page headers ✅
- **SCRUM-8 a SCRUM-19:** Disponibles para futuras mejoras

### Últimos Cambios
- Reemplazo de nombres ficticios por nombres reales de estudiantes en Articles
- Mejora de textos descriptivos en la página principal
- Actualización de placeholders de búsqueda para mayor claridad
- Mejora de títulos y descripciones en páginas de investigación

## 🎯 Próximas Características

### ✅ Completadas
- [x] Sistema de navegación entre páginas
- [x] Página de artículos académicos con búsqueda y filtros
- [x] Sistema de foros de discusión
- [x] Sección de investigación con gestión de proyectos
- [x] Página de contacto con formulario y mapas

### 🚀 En desarrollo
- [ ] Sistema de autenticación para estudiantes
- [ ] Backend para gestión dinámica de contenido
- [ ] Sistema de comentarios en artículos
- [ ] Funcionalidad de respuesta en foros
- [ ] Publicación de nuevos artículos por usuarios autorizados
- [ ] Sistema de notificaciones
- [ ] Perfil de usuario
- [ ] Sistema de mensajería privada
- [ ] Calendario de eventos académicos
- [ ] Integración con plataformas de la UNI
- [ ] Sistema de evaluaciones y calificaciones
- [ ] Descarga de recursos y materiales del curso

## 👥 Equipo de Desarrollo

### Estudiantes Contribuidores
- **Adauto Huaman, Isaac** - Líder de Investigación
- **Espinoza Valverde, Víctor** - Desarrollo Frontend
- **Flores Rivas, Alvaro** - Arquitectura de Software
- **Flores Velarde, Roberto** - Tech Lead & Investigador
- **Huamán Silva, Luis** - Líder de Investigación
- **León Sánchez, Fransua** - Full Stack Developer
- **Lopez Milla, Bill** - DevOps Engineer
- **Pizarro Huarcaya, Angela** - Consultora Ágil
- **Quispe Tenorio, Ximena** - Arquitecta de Software
- **Sosa Palacios, Jhosep** - Especialista DevOps
- **Velasquez Solis, Walter** - Arquitecto de Software

### Contribución

Este es un proyecto académico para el curso de Desarrollo Adaptativo de Software de la UNI. Las contribuciones son bienvenidas siguiendo las guías de estilo del proyecto y los principios SOLID.

## 🛠️ Comandos Útiles para Desarrollo

```bash
# Ver el estado de los archivos
git status

# Ver las ramas actuales
git branch -a

# Cambiar entre ramas
git checkout [nombre-rama]

# Ver los logs con formato bonito
git log --oneline --graph --all

# Actualizar tu rama con los últimos cambios de main
git checkout main
git pull
git checkout tu-rama
git merge main

# Ver los cambios antes de hacer commit
git diff

# Ejecutar los tests (cuando se implementen)
npm test

# Construir para producción
npm run build

# Verificar el código con el linter
npm run lint
```

## 📧 Contacto

- **Email:** desarrollo.adaptativo@uni.edu.pe
- **Teléfono:** +51 1 481-1070
- **Dirección:** Av. Túpac Amaru 210, Lima 25, Perú

## 📄 Licencia

Proyecto académico de la Universidad Nacional de Ingeniería - Curso de Desarrollo Adaptativo de Software. 
Todos los derechos reservados © 2024 UNI.

---

Desarrollado con ❤️ por estudiantes de la Facultad de Ingeniería Industrial y de Sistemas (FIIS) para la comunidad académica de la UNI
