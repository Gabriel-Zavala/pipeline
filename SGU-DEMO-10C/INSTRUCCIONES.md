# Instrucciones de Despliegue - SGU-DEMO-10C

## Paso 1: Inicializar el Repositorio Git

Abre una terminal en la carpeta del proyecto y ejecuta:

```bash
cd SGU-DEMO-10C
git init
git add .
git commit -m "Initial commit: Proyecto SGU con Spring Boot y React"
```

## Paso 2: Crear el Repositorio en GitHub/GitLab

1. Ve a GitHub (github.com) o GitLab (gitlab.com)
2. Crea un nuevo repositorio con el nombre: **SGU-DEMO-10C** (o el nombre que prefieras)
3. **NO inicialices el repositorio con README, .gitignore o licencia** (ya los tenemos)

## Paso 3: Conectar el Repositorio Local con el Remoto

Ejecuta estos comandos (reemplaza `TU_USUARIO` con tu usuario de GitHub/GitLab):

**Para GitHub:**
```bash
git remote add origin https://github.com/TU_USUARIO/SGU-DEMO-10C.git
git branch -M main
git push -u origin main
```

**Para GitLab:**
```bash
git remote add origin https://gitlab.com/TU_USUARIO/SGU-DEMO-10C.git
git branch -M main
git push -u origin main
```

## Paso 4: Configurar Jenkins

### 4.1 Crear un Nuevo Pipeline en Jenkins

1. Abre Jenkins en tu navegador
2. Haz clic en **"New Item"** o **"Nuevo elemento"**
3. Ingresa el nombre: `SGU-DEMO-10C`
4. Selecciona **"Pipeline"**
5. Haz clic en **"OK"**

### 4.2 Configurar el Pipeline

1. En la sección **"Pipeline"**, selecciona:
   - **Definition**: Pipeline script from SCM
   - **SCM**: Git
   - **Repository URL**: La URL de tu repositorio (ej: `https://github.com/TU_USUARIO/SGU-DEMO-10C.git`)
   - **Credentials**: Si tu repositorio es privado, agrega tus credenciales
   - **Branch Specifier**: `*/main` (o `*/master` según tu rama)
   - **Script Path**: `Jenkinsfile`

2. Haz clic en **"Save"**

### 4.3 Ejecutar el Pipeline

1. En la página del pipeline, haz clic en **"Build Now"** o **"Construir ahora"**
2. Observa el progreso en la consola de salida
3. El pipeline realizará:
   - Checkout del código
   - Build de la imagen del backend (`server:1.0-sgu`)
   - Build de la imagen del frontend (`client:1.0-sgu`)
   - Detención de contenedores anteriores
   - Inicio de servicios con docker-compose
   - Verificación de salud de los servicios

## Paso 5: Verificar que Todo Funciona

Una vez que el pipeline termine exitosamente:

1. **Verifica los contenedores:**
   ```bash
   docker ps
   ```
   Deberías ver:
   - `sgu-database`
   - `sgu-backend`
   - `sgu-frontend`

2. **Accede a la aplicación:**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8080/api/users

3. **Prueba el CRUD:**
   - Crea un nuevo usuario
   - Edita un usuario
   - Elimina un usuario
   - Verifica que los datos persisten

## Comandos Útiles

### Ver logs de los contenedores:
```bash
docker-compose logs -f
```

### Detener todos los servicios:
```bash
docker-compose down
```

### Reiniciar los servicios:
```bash
docker-compose restart
```

### Ver el estado de los servicios:
```bash
docker-compose ps
```

### Limpiar todo (contenedores, imágenes, volúmenes):
```bash
docker-compose down -v
docker rmi server:1.0-sgu client:1.0-sgu
```

## Solución de Problemas

### Si el pipeline falla en el build:

1. Verifica que Docker esté corriendo:
   ```bash
   docker --version
   docker-compose --version
   ```

2. Verifica los logs del pipeline en Jenkins

3. Prueba construir manualmente:
   ```bash
   cd backend
   docker build -t server:1.0-sgu .
   
   cd ../frontend
   docker build -t client:1.0-sgu .
   ```

### Si los contenedores no inician:

1. Verifica los logs:
   ```bash
   docker-compose logs backend
   docker-compose logs frontend
   docker-compose logs database
   ```

2. Verifica que los puertos no estén en uso:
   ```bash
   # Windows
   netstat -ano | findstr :3000
   netstat -ano | findstr :8080
   netstat -ano | findstr :3306
   ```

### Si el frontend no se conecta al backend:

1. Verifica que ambos contenedores estén en la misma red:
   ```bash
   docker network inspect sgu-net
   ```

2. Verifica que el backend esté respondiendo:
   ```bash
   curl http://localhost:8080/api/users
   ```

## Notas Importantes

- **Cambia el nombre de la carpeta**: Si tu proyecto debe llamarse diferente (ej: `SGU-TUS_INICIALES-10X`), renombra la carpeta antes de hacer el commit inicial
- **Credenciales de base de datos**: Las credenciales por defecto son `root/rootpassword`. Cámbialas en producción
- **Puertos**: Si los puertos 3000, 8080 o 3306 están en uso, modifica `docker-compose.yml`

