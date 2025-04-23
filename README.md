# Aplicación de Facturas (Invoices App)

## Descripción
Una aplicación web moderna para la gestión de facturas desarrollada con React y Vite. Esta aplicación permite a los usuarios gestionar, crear y dar seguimiento a sus facturas de manera eficiente.

## Características
- Gestión completa de facturas
- Interfaz de usuario moderna y responsiva
- Enrutamiento dinámico
- Estado global con Zustand
- API REST simulada con json-server

## Tecnologías Utilizadas
- React 19
- Vite 6
- React Router DOM 7
- Zustand (Gestión de estado)
- React Toastify (Notificaciones)
- JSON Server (API REST)
- ESLint (Linting)

## Requisitos Previos
- Node.js (versión recomendada: la más reciente)
- npm o yarn

## Instalación

1. Clonar el repositorio:
```bash
git clone [url-del-repositorio]
```

2. Instalar dependencias:
```bash
npm install
```

3. Iniciar el servidor de desarrollo:
```bash
npm run dev
```

4. En una terminal separada, iniciar el servidor JSON:
```bash
npm run server
```

## Scripts Disponibles
- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Construye la aplicación para producción
- `npm run preview`: Vista previa de la build de producción
- `npm run lint`: Ejecuta el linter
- `npm run server`: Inicia el servidor JSON para la API

## Estructura del Proyecto
```
src/
├── assets/         # Recursos estáticos
├── components/     # Componentes reutilizables
├── helper/         # Funciones auxiliares
├── hooks/          # Custom hooks
├── layouts/        # Layouts de la aplicación
├── pages/          # Páginas principales
├── services/       # Servicios y llamadas API
├── store/          # Estado global (Zustand)
├── App.jsx         # Componente principal
└── main.jsx        # Punto de entrada
```

## Contribución
1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia
Este proyecto está bajo la Licencia MIT.
