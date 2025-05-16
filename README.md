# Aplicación de Facturas (Invoices App)

## Descripción
Una aplicación web moderna para la gestión de facturas desarrollada con React y Vite. Esta aplicación permite a los usuarios crear, editar, visualizar y gestionar facturas de manera eficiente con una interfaz moderna y amigable.

## Características
- Gestión completa de facturas (crear, editar, eliminar, cambiar estado)
- Interfaz de usuario moderna y responsiva
- Sistema de autenticación con roles (admin/user)
- Enrutamiento dinámico con React Router 7
- Estado global gestionado con Zustand
- Notificaciones con React Toastify
- API REST simulada con json-server

## Tecnologías Utilizadas
- React 19
- Vite 6
- React Router DOM 7
- Zustand (Gestión de estado)
- React Toastify (Notificaciones)
- JSON Server (API REST simulada)
- ESLint 9 (Linting)
- Iconify (Iconos)

## Requisitos Previos
- Node.js (versión 18 o superior)
- npm o yarn

## Instalación

1. Clonar el repositorio:
```bash
git clone [url-del-repositorio]
cd invoices_app
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

5. Abrir la aplicación en el navegador:
```
http://localhost:5173
```

## Datos de acceso de prueba
- Admin:
  - Email: admin@admin.com
  - Password: 123456
- Usuario:
  - Email: user@user.com
  - Password: 123456

## Scripts Disponibles
- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Construye la aplicación para producción
- `npm run preview`: Vista previa de la build de producción
- `npm run lint`: Ejecuta el linter
- `npm run server`: Inicia el servidor JSON para la API REST simulada (puerto 3000)

## Estructura del Proyecto
```
invoices_app/
├── src/
│   ├── assets/         # Recursos estáticos
│   ├── components/     # Componentes reutilizables
│   ├── helper/         # Funciones auxiliares
│   ├── hooks/          # Custom hooks
│   ├── layouts/        # Layouts de la aplicación
│   ├── pages/          # Páginas principales
│   ├── services/       # Servicios y llamadas API
│   ├── store/          # Estado global (Zustand)
│   ├── App.jsx         # Componente principal
│   └── main.jsx        # Punto de entrada
├── db.json             # Base de datos JSON para el servidor
├── public/             # Archivos públicos
├── index.html          # HTML principal
└── vite.config.js      # Configuración de Vite
```

## API REST
El proyecto utiliza json-server para simular una API REST con los siguientes endpoints:

- `GET /invoices`: Obtener todas las facturas
- `GET /invoices/:id`: Obtener una factura específica
- `POST /invoices`: Crear una nueva factura
- `PUT /invoices/:id`: Actualizar una factura existente
- `DELETE /invoices/:id`: Eliminar una factura
- `GET /users`: Obtener todos los usuarios

## Contribución
1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/NuevaFuncionalidad`)
3. Commit tus cambios (`git commit -m 'Añadir nueva funcionalidad'`)
4. Push a la rama (`git push -u origin feature/NuevaFuncionalidad`)
5. Abre un Pull Request


