# Cómo Subir el Proyecto a Jenkins - Paso a Paso

## 📤 PASO 1: Subir el Código a GitHub/GitLab

### 1.1 Inicializar Git (si no lo has hecho)

Abre una terminal (PowerShell o CMD) y ejecuta:

```bash
cd d:\pipeline\SGU-DEMO-10C
git init
git add .
git commit -m "Initial commit: Proyecto SGU con Spring Boot y React"
```

### 1.2 Crear el Repositorio en GitHub

1. Ve a **https://github.com** e inicia sesión
2. Haz clic en el botón **"+"** (arriba a la derecha) → **"New repository"**
3. Nombre del repositorio: `SGU-DEMO-10C`
4. **NO marques** "Add a README file", "Add .gitignore", ni "Choose a license"
5. Haz clic en **"Create repository"**

### 1.3 Conectar y Subir el Código

En la terminal, ejecuta estos comandos (reemplaza `TU_USUARIO` con tu usuario de GitHub):

```bash
cd d:\pipeline\SGU-DEMO-10C
git remote add origin https://github.com/TU_USUARIO/SGU-DEMO-10C.git
git branch -M main
git push -u origin main
```

**Nota:** Te pedirá tu usuario y contraseña/token de GitHub. Si pide autenticación:
- Usuario: tu usuario de GitHub
- Contraseña: usa un **Personal Access Token** (no tu contraseña normal)
  - Para crear un token: GitHub → Settings → Developer settings → Personal access tokens → Generate new token

---

## 🔧 PASO 2: Configurar Jenkins

### 2.1 Crear el Pipeline en Jenkins

1. Abre Jenkins en tu navegador (normalmente: `http://localhost:8080`)
2. Haz clic en **"New Item"** o **"Nuevo elemento"**
3. Ingresa el nombre: `SGU-DEMO-10C`
4. Selecciona **"Pipeline"**
5. Haz clic en **"OK"**

### 2.2 Configurar el Pipeline

En la página de configuración del pipeline:

1. **Scroll hacia abajo** hasta la sección **"Pipeline"**

2. En **"Definition"**, selecciona: **"Pipeline script from SCM"**

3. En **"SCM"**, selecciona: **"Git"**

4. Llena los campos:
   - **Repository URL**: `https://github.com/TU_USUARIO/SGU-DEMO-10C.git`
     (Reemplaza `TU_USUARIO` con tu usuario)
   
   - **Credentials**: 
     - Si el repositorio es **público**: déjalo vacío
     - Si el repositorio es **privado**: haz clic en "Add" → "Jenkins" y agrega tus credenciales de GitHub
   
   - **Branch Specifier**: `*/main` (o `*/master` si usas master)
   
   - **Script Path**: `Jenkinsfile` (debe estar exactamente así)

5. Haz clic en **"Save"**

---

## ▶️ PASO 3: Ejecutar el Pipeline

1. En la página del pipeline `SGU-DEMO-10C`, haz clic en **"Build Now"** o **"Construir ahora"**

2. Espera a que termine (puede tardar 2-5 minutos)

3. Verás el progreso en tiempo real:
   - ✅ Checkout
   - ✅ Build Backend
   - ✅ Build Frontend
   - ✅ Stop Previous Containers
   - ✅ Start Services
   - ✅ Wait for Services
   - ✅ Health Check

4. Cuando termine exitosamente, verás un círculo verde ✅

---

## 📸 PASO 4: Tomar la Captura del Pipeline

1. Haz clic en el número del build más reciente (ej: #1, #2, etc.)

2. Captura la pantalla completa:
   - Presiona `Windows + Shift + S`
   - Selecciona toda la pantalla
   - Debe mostrar:
     - Estado "Success" (verde) ✅
     - Fecha reciente
     - Todos los stages completados

3. Guarda la captura como: `Jenkins-Pipeline-Captura.png`

---

## ✅ Verificación Final

Después de ejecutar el pipeline, verifica que todo esté corriendo:

```bash
docker ps
```

Debes ver los 3 contenedores:
- `sgu-database`
- `sgu-backend`
- `sgu-frontend`
```

---

## 🚨 Solución de Problemas

### Si Git pide autenticación:

**Opción 1: Usar Personal Access Token**
1. Ve a GitHub → Settings → Developer settings → Personal access tokens
2. Generate new token (classic)
3. Selecciona los permisos: `repo`
4. Copia el token y úsalo como contraseña

**Opción 2: Usar SSH (más seguro)**
```bash
# Generar clave SSH
ssh-keygen -t ed25519 -C "tu_email@example.com"

# Agregar la clave a GitHub
# (Copia el contenido de ~/.ssh/id_ed25519.pub y agrégalo en GitHub → Settings → SSH keys)

# Cambiar la URL del remoto
git remote set-url origin git@github.com:TU_USUARIO/SGU-DEMO-10C.git
```

### Si Jenkins no puede clonar el repositorio:

1. Verifica que la URL del repositorio sea correcta
2. Si es privado, asegúrate de haber agregado las credenciales
3. Prueba clonar manualmente:
   ```bash
   git clone https://github.com/TU_USUARIO/SGU-DEMO-10C.git
   ```

### Si el pipeline falla:

1. Haz clic en el build fallido
2. Haz clic en "Console Output" para ver los logs
3. Revisa qué stage falló
4. Verifica que Docker esté corriendo:
   ```bash
   docker --version
   docker-compose --version
   ```

---

## 📝 Resumen de Comandos

```bash
# 1. Ir a la carpeta del proyecto
cd d:\pipeline\SGU-DEMO-10C

# 2. Inicializar Git (si no lo has hecho)
git init
git add .
git commit -m "Initial commit: Proyecto SGU con Spring Boot y React"

# 3. Conectar con GitHub (reemplaza TU_USUARIO)
git remote add origin https://github.com/TU_USUARIO/SGU-DEMO-10C.git
git branch -M main
git push -u origin main

# 4. Si haces cambios después, para actualizar:
git add .
git commit -m "Descripción de los cambios"
git push
```

---

## 🎯 Checklist

- [ ] Creé el repositorio en GitHub
- [ ] Subí el código con `git push`
- [ ] Creé el pipeline en Jenkins
- [ ] Configuré el pipeline con la URL del repositorio
- [ ] Ejecuté el pipeline exitosamente
- [ ] Tomé la captura del build exitoso
