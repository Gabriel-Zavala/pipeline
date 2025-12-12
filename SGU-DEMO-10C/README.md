# SGU - Sistema de Gestión de Usuarios

Proyecto de infraestructura completa con Spring Boot (backend), React (frontend) y MySQL (base de datos), desplegado mediante Docker y Jenkins.

## Estructura del Proyecto

```
SGU-DEMO-10C/
├── backend/                 # Aplicación Spring Boot
│   ├── src/
│   │   └── main/
│   │       ├── java/com/sgu/
│   │       │   ├── modules/
│   │       │   │   └── users/    # Módulo de usuarios
│   │       │   │       ├── entity/
│   │       │   │       ├── repository/
│   │       │   │       ├── service/
│   │       │   │       └── controller/
│   │       │   └── SguApplication.java
│   │       └── resources/
│   │           └── application.properties
│   ├── Dockerfile
│   └── pom.xml
├── frontend/               # Aplicación React
│   ├── src/
│   │   ├── components/
│   │   │   ├── UsersTable.js
│   │   │   └── UserModal.js
│   │   ├── App.js
│   │   └── index.js
│   ├── public/
│   ├── Dockerfile
│   ├── nginx.conf
│   └── package.json
├── docker-compose.yml
├── Jenkinsfile
└── README.md
```

## Servicios y Contenedores

| Servicio | Nombre (compose) | Contenedor | Imagen | ¿Se construye? |
|----------|------------------|------------|--------|----------------|
| Base de datos | database | sgu-database | mysql:8 | No |
| Cliente | frontend | sgu-frontend | client:1.0-sgu | Sí |
| Servidor | backend | sgu-backend | server:1.0-sgu | Sí |

## Red y Volumen

- **Red**: `sgu-net`
- **Volumen**: `sgu-volume`

## Requisitos

- Docker
- Docker Compose
- Jenkins (para ejecutar el pipeline)
- Maven (para desarrollo local del backend)
- Node.js (para desarrollo local del frontend)

## Instalación y Uso

### Desarrollo Local

#### Backend
```bash
cd backend
mvn clean install
mvn spring-boot:run
```

#### Frontend
```bash
cd frontend
npm install
npm start
```

### Docker Compose

Para levantar todos los servicios:

```bash
docker-compose up -d
```

Para detener los servicios:

```bash
docker-compose down
```

### Jenkins Pipeline

1. Crea un nuevo pipeline en Jenkins
2. Configura el pipeline para usar el Jenkinsfile del repositorio
3. Ejecuta el pipeline

El pipeline realizará:
- Checkout del código
- Build de las imágenes Docker (backend y frontend)
- Detención de contenedores anteriores
- Inicio de servicios con docker-compose
- Verificación de salud de los servicios

## Endpoints del Backend

- `GET /api/users` - Obtener todos los usuarios
- `GET /api/users/{id}` - Obtener usuario por ID
- `POST /api/users` - Crear nuevo usuario
- `PUT /api/users/{id}` - Actualizar usuario
- `DELETE /api/users/{id}` - Eliminar usuario

## Modelo de Usuario

- `id` (Long) - ID único
- `nombreCompleto` (String) - Nombre completo del usuario
- `correoElectronico` (String) - Correo electrónico (único)
- `numeroTelefono` (String) - Número de teléfono

## Acceso a la Aplicación

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8080/api/users
- **Base de datos**: localhost:3306

## Notas

- La base de datos se inicializa automáticamente al iniciar el contenedor
- El backend espera a que la base de datos esté lista antes de iniciar
- El frontend se comunica con el backend a través de la red Docker
