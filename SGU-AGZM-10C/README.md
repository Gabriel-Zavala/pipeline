# SGU-AGZM-10C - Sistema de Gestión de Usuarios

Proyecto de CRUD de usuarios desarrollado como parte de la Actividad 05 del curso SGU Deployment.

## Descripción

Sistema completo de gestión de usuarios que permite crear, leer, actualizar y eliminar usuarios. El proyecto está compuesto por:

- **Frontend**: Aplicación React con interfaz de usuario para gestionar usuarios
- **Backend**: API REST desarrollada con Node.js y Express
- **Base de Datos**: MySQL 8 para almacenar la información de usuarios

## Estructura del Proyecto

```
SGU-AGZM-10C/
├── backend/
│   ├── modules/
│   │   └── users/
│   │       ├── users.controller.js
│   │       ├── users.service.js
│   │       └── users.routes.js
│   ├── config/
│   │   └── database.js
│   ├── server.js
│   ├── package.json
│   └── Dockerfile
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── UsersTable.js
│   │   │   └── UserModal.js
│   │   ├── services/
│   │   │   └── users.service.js
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   ├── public/
│   │   └── index.html
│   ├── package.json
│   ├── Dockerfile
│   └── nginx.conf
├── docker-compose.yml
├── Jenkinsfile
└── README.md
```

## Requisitos

- Docker
- Docker Compose
- Jenkins (para ejecutar el pipeline)

## Instalación y Uso

### Opción 1: Usando Docker Compose directamente

```bash
# Construir y levantar los servicios
docker-compose up -d

# Ver los logs
docker-compose logs -f

# Detener los servicios
docker-compose down
```

### Opción 2: Usando Jenkins Pipeline

1. Configura un job en Jenkins con el Jenkinsfile proporcionado
2. Ejecuta el pipeline
3. El pipeline construirá las imágenes, desplegará los servicios y verificará su salud

## Servicios

### Base de Datos
- **Servicio**: `database`
- **Contenedor**: `sgu-database`
- **Imagen**: `mysql:8`
- **Puerto**: 3306
- **Base de datos**: `sgu_db`
- **Usuario**: `root`
- **Contraseña**: `rootpassword`

### Backend
- **Servicio**: `backend`
- **Contenedor**: `sgu-backend`
- **Imagen**: `server:1.0-sgu`
- **Puerto**: 3000
- **API Base**: `http://localhost:3000/api`

### Frontend
- **Servicio**: `frontend`
- **Contenedor**: `sgu-frontend`
- **Imagen**: `client:1.0-sgu`
- **Puerto**: 80
- **URL**: `http://localhost`

## Endpoints de la API

### Usuarios

- `GET /api/users` - Obtener todos los usuarios
- `GET /api/users/:id` - Obtener un usuario por ID
- `POST /api/users` - Crear un nuevo usuario
- `PUT /api/users/:id` - Actualizar un usuario
- `DELETE /api/users/:id` - Eliminar un usuario

### Health Check

- `GET /health` - Verificar estado del servidor

## Modelo de Datos

### Usuario

```json
{
  "id": 1,
  "nombre_completo": "Juan Pérez",
  "correo_electronico": "juan@example.com",
  "numero_telefono": "1234567890",
  "created_at": "2024-01-01T00:00:00.000Z",
  "updated_at": "2024-01-01T00:00:00.000Z"
}
```

## Red y Volumen

- **Red**: `sgu-net` (bridge)
- **Volumen**: `sgu-volume` (para persistencia de datos de MySQL)

## Características

- ✅ CRUD completo de usuarios
- ✅ Interfaz de usuario moderna y responsive
- ✅ Validación de formularios
- ✅ Modales para crear/editar usuarios
- ✅ Tabla con lista de usuarios
- ✅ Confirmación antes de eliminar
- ✅ Dockerización completa
- ✅ Pipeline CI/CD con Jenkins

## Desarrollo

### Backend

```bash
cd backend
npm install
npm start
```

### Frontend

```bash
cd frontend
npm install
npm start
```

## Notas

- La base de datos se inicializa automáticamente con la tabla `usuarios` al iniciar el backend
- El frontend está configurado para comunicarse con el backend a través de nginx
- Todos los servicios están conectados a la red `sgu-net`
- Los datos de MySQL se persisten en el volumen `sgu-volume`

## Autor

AGZM - Grupo 10C

## Licencia

Este proyecto es parte de una actividad académica.
